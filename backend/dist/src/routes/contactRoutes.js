"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const contactControllers_1 = __importDefault(require("../controllers/contactControllers"));
const express_1 = require("express");
const contactRouter = (0, express_1.Router)();
contactRouter.post("/myBlog", contactControllers_1.default.createContact);
exports.default = contactRouter;
