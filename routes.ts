import {Router} from "express";
import { SurveysController } from "./src/controllers/SurveysController";
import {UserController} from "./src/controllers/UserController"

const router = Router();

const userControler = new UserController();
const surveyControler = new SurveysController();

router.post("/users", userControler.create);

router.post("/surveys", surveyControler.create);
router.get("/surveys", surveyControler.show);


export { router };