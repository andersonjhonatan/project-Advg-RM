import contato from '../service/contactService'

interface ReqContact {
  id: string
  name: string
  phone: string
  email: string
  text: string
}
class ContactController {
  async createContact(req: ReqContact, res: any): Promise<void> {
    const contact = req
    const newContact = await contato.createContact(contact)
    res.status(200).json(newContact)
  }
}

export default new ContactController()
