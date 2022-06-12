import { Request, Response, Router } from "express"

import { NodemailerServiceMailer } from '../../services/nodemailer/NodemailerServiceMailer';
import { PrismaFeedbackRepository } from '../../repositories/prisma/PrismaFeedbackRepository';

import { UseCaseSubmitFeedback } from "../../usecases/useCaseSubmitFeedback";

import { FeedbackRepositoryCreateDataType } from "../../repositories/FeedbackRepository";

type FeedbackBody = {
  type: string;
  comment: string;
  screenshot?: string;
};

const post = async (req: Request, res: Response) => {

  try {
    let { type, comment, screenshot } = req.body as FeedbackBody;

    const prismaFeedbackRepository = new PrismaFeedbackRepository()
    const nodemailerServiceMailer = new NodemailerServiceMailer()

    const useCaseSubmitFeedback = new UseCaseSubmitFeedback(
      prismaFeedbackRepository, nodemailerServiceMailer
    )

    const id = await useCaseSubmitFeedback.execute({
      type: type as FeedbackRepositoryCreateDataType,
      comment, screenshot
    })

    const feedback = {
      id, type, comment
    }

    res.status(201).json({ data: feedback });
  } catch (e) {
    res.status(500).send(e);
  }
}

export const feedback = (router: Router) => {
  router.post('/feedback', post)
}
