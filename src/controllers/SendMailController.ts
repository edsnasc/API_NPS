import { UsersRepository } from "../repositories/UsersRepository"
import { request, Request, response, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import { SurveysRepository } from "../repositories/SurveysRepository";
import { SurveysUsersRepository } from "../repositories/SurveysUsersRepository";

class SendMailController {
    async execute(request: Request, response: Response) {
        const { email, survey_id} = request.body;

        const usersRepository = getCustomRepository(UsersRepository);
        const surveysRepository = getCustomRepository(SurveysRepository);
        const surveysUsersRepository = getCustomRepository(SurveysUsersRepository);

        const userAlreadyExists = await usersRepository.findOne({email});

        if(!userAlreadyExists) {
            return response.status(480).json({
                error: "User does not exists",
            });
        }
    }
}

export { SendMailController }