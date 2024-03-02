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
const client_1 = require("@prisma/client");
const nodemailer_1 = __importDefault(require("nodemailer"));
const prisma = new client_1.PrismaClient();
class ContactService {
    createContact(contact) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newContact = yield prisma.contact.create({
                    data: {
                        name: contact.name || '',
                        phone: contact.phone || '',
                        email: contact.email || '',
                        text: contact.text || '',
                    },
                });
                this.sendEmail(contact);
                return newContact;
            }
            catch (error) {
                console.error('Error creating contact:', error);
                throw error;
            }
        });
    }
    sendEmail(contact) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const transporter = nodemailer_1.default.createTransport({
                    host: 'smtp.ethereal.email',
                    port: 587,
                    auth: {
                        user: 'polly.stokes@ethereal.email',
                        pass: 'HVNY5k4wcZzAE4nyNW',
                    },
                });
                const mailOptions = {
                    from: `${contact.name} <${contact.email}>`,
                    to: 'ajhonatan76@gmail.com',
                    subject: 'Contato pelo site',
                    text: `${contact.text}`,
                };
                console.log('Mail Options:', mailOptions);
                yield transporter.sendMail(mailOptions);
                console.log('E-mail enviado com sucesso!');
            }
            catch (error) {
                console.error('Error sending email:', error);
                throw error;
            }
        });
    }
}
exports.default = new ContactService();
