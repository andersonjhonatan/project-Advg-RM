import contactControllers from "../controllers/contactControllers";
import { Router } from "express";

const contactRouter = Router();

contactRouter.post("/myBlog", contactControllers.createContact);
contactRouter.post("/sendEmail", contactControllers.getContacts);


export default contactRouter


