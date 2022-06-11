import { ServiceMailer } from './../services/ServiceMailer'
import { FeedbackRepository } from './../repositories/FeedbackRepository'

interface ExecuteData {
  type: string;
  comment: string;
  screenshot?: string;
}

export class UseCaseSubmitFeedback {
  constructor(
    private feedbackRepository: FeedbackRepository,
    private serviceMailer: ServiceMailer
  ) {}

  async execute(data: ExecuteData) {
    const { type, comment, screenshot } = data;

    const id = await this.feedbackRepository.create({ type, comment, screenshot })

    await this.serviceMailer.send({
      subject: 'Novo Feedback !!',
      body: [
        `<p>Tipo do feedback: ${ type }</p>`,
        `<p>Comentário: ${ comment }</p>`,
      ],
    });

    return id
  }
}
