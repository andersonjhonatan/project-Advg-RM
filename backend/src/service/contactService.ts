import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

interface Contact {
  id: string
  name: string
  phone: string
  email: string
  text: string
}

class ContactService {
  async createContact(contact: Contact) {
    const newContact = await prisma.contact.create({
      data: {
        id: contact.id,
        name: contact.name,
        phone: contact.phone,
        email: contact.email,
        text: contact.text,
      },
    })
    return newContact
  }
}

export default new ContactService()
