import {Router} from "express";
import { SendMailController } from "./src/controllers/SendMailController";
import { SurveysController } from "./src/controllers/SurveysController";
import {UserController} from "./src/controllers/UserController"

const router = Router();

const userControler = new UserController();
const surveyControler = new SurveysController();

const sendMailController = new SendMailController();

router.post("/users", userControler.create);

router.post("/surveys", surveyControler.create);
router.get("/surveys", surveyControler.show);

router.post("/sendMail", sendMailController.execute);

export { router };