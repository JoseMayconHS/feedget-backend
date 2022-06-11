import { Request, Response, Router } from "express"

import { NodemailerServiceMailer } from '../../services/nodemailer/NodemailerServiceMailer';
import { PrismaFeedbackRepository } from '../../repositories/prisma/PrismaFeedbackRepository';

import { UseCaseSubmitFeedback } from "../../usecases/useCaseSubmitFeedback";

type FeedbackBody = {
  type: string;
  comment: string;
  screenshot?: string;
};

const post = async (req: Request, res: Response) => {
  try {
    const { type, comment, screenshot } = req.body as FeedbackBody;

    const prismaFeedbackRepository = new PrismaFeedbackRepository()
    const nodemailerServiceMailer = new NodemailerServiceMailer()

    const useCaseSubmitFeedback = new UseCaseSubmitFeedback(
      prismaFeedbackRepository, nodemailerServiceMailer
    )

    const id = await useCaseSubmitFeedback.execute({ type, comment, screenshot })

    const feedback = {
      id, type, comment, screenshot
    }

    res.status(201).json({ data: feedback });
  } catch (e) {
    res.status(500).send(e);
  }
}

export const feedback = (router: Router) => {
  router.post('/feedback', post)
}
