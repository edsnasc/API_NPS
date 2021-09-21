import {Router} from "express";
import { AnswerController } from "./src/controllers/AnswerController";
import { NpsController } from "./src/controllers/NpsController";
import { SendMailController } from "./src/controllers/SendMailController";
import { SurveysController } from "./src/controllers/SurveysController";
import {UserController} from "./src/controllers/UserController"

const router = Router();

const userControler = new UserController();
const surveyControler = new SurveysController();

const sendMailController = new SendMailController();

const answerController = new AnswerController();

const npsController = new NpsController();

router.post("/users", userControler.create);

router.post("/surveys", surveyControler.create);
router.get("/surveys", surveyControler.show);

router.post("/sendMail", sendMailController.execute);

router.get("/answers/:value", answerController.execute);

router.get("/nps/:survey_id", npsController.execute);

export { router };