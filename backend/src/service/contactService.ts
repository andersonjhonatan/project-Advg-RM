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
      this.sendEmail(contact)
      return newContact
    } catch (error) {
      console.error('Error creating contact:', error)
      throw error
    }
  }

  async sendEmail(contact: Contact) {
    try {
      const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
          user: 'polly.stokes@ethereal.email',
          pass: 'HVNY5k4wcZzAE4nyNW',
        },
      })
      const mailOptions = {
        from: `${contact.name} <${contact.email}>`,
        to: 'ajhonatan76@gmail.com',
        subject: 'Contato pelo site',
        text: `${contact.text}`,
      }
      console.log('Mail Options:', mailOptions);
      await transporter.sendMail(mailOptions)
      console.log('E-mail enviado com sucesso!')
    } catch (error) {
      console.error('Error sending email:', error)
      throw error
    }
  }
}

export default new ContactService()
