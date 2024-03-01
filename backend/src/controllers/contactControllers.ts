import contato from '../service/contactService'
import { Request, Response } from 'express'

interface ReqContact {
  name: string
  phone: string
  email: string
  text: string
}

class ContactController {
  async createContact(req: Request, res: Response): Promise<void> {
    try {
      const contact: ReqContact = req.body

      if (!contact.name || !contact.phone || !contact.email || !contact.text) {
        res.status(400).json({ error: 'Todos os campos são obrigatórios' })
        return
      }

      const newContact = await contato.createContact(contact)
      res.status(200).json(newContact)
    } catch (error) {
      console.error('Erro ao criar contato:', error)
      res.status(500).json({ error: 'Erro interno do servidor' })
    }
  }

  async getContacts(req: Request, res: Response): Promise<void> {
    try {
      const contact = req.body
      const contacts = await contato.sendEmail(contact)
      res.status(200).json(contacts)
    } catch (error) {
      console.error('Erro ao buscar contatos:', error)
      res.status(500).json({ error: 'Erro interno do servidor' })
    }
  }
}

export default new ContactController()
