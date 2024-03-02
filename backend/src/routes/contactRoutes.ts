import contactControllers from "../controllers/contactControllers";
import { Router } from "express";

const contactRouter = Router();

contactRouter.post("/myBlog", contactControllers.createContact);


export default contactRouter


