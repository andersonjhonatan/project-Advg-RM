import { PrismaClient } from '@prisma/client'
import nodemailer from 'nodemailer'

const prisma = new PrismaClient()

interface Contact {
  name: string
  phone: string
  email: string
  text: string
}

class ContactService {
  async createContact(contact: Contact) {
    try {
      const newContact = await prisma.contact.create({
        data: {
          name: contact.name || '',
          phone: contact.phone || '',
          email: contact.email || '',
          text: contact.text || '',
        },
      })
      await this.sendEmail(contact)
      return newContact
    } catch (error) {
      console.error('Error creating contact:', error)
      throw error
    }
  }

  async sendEmail(contact: Contact) {
    try {
      const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: false,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      })
      const mailOptions = {
        from: `${contact.name} <${contact.email}>`,
        to: 'ajhonatan76@gmail.com',
        subject: 'Contato pelo site',
        html: `
    <p><strong>Nome:</strong> ${contact.name}</p>
    <p><strong>Email:</strong> ${contact.email}</p>
    <p><strong>Telefone:</strong> ${contact.phone}</p>
    <p><strong>Mensagem:</strong> ${contact.text}</p>
  `,
      }
      await transporter.sendMail(mailOptions)
      console.log('E-mail enviado com sucesso!')
    } catch (error) {
      console.error('Error sending email:', error)
      throw error
    }
  }
}

export default new ContactService()
