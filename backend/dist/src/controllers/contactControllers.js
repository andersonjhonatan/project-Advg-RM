"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const contactService_1 = __importDefault(require("../service/contactService"));
class ContactController {
    createContact(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const contact = req.body;
                if (!contact.name || !contact.phone || !contact.email || !contact.text) {
                    res.status(400).json({ error: 'Todos os campos são obrigatórios' });
                    return;
                }
                const newContact = yield contactService_1.default.createContact(contact);
                res.status(200).json(newContact);
            }
            catch (error) {
                console.error('Erro ao criar contato:', error);
                res.status(500).json({ error: 'Erro interno do servidor' });
            }
        });
    }
}
exports.default = new ContactController();
