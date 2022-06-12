import { ServiceMailer } from './../services/ServiceMailer'
import { FeedbackRepository, FeedbackRepositoryCreateDataType } from './../repositories/FeedbackRepository'

interface ExecuteData {
  type: FeedbackRepositoryCreateDataType;
  comment: string;
  screenshot?: string;
}

export class UseCaseSubmitFeedback {
  constructor(
    private feedbackRepository: FeedbackRepository,
    private serviceMailer: ServiceMailer
  ) {}

  async execute(data: ExecuteData) {
    const { type, comment, screenshot } = data

    if (screenshot && !/^data:image[/]png;base64/.test(screenshot)) {
      throw new Error('Invalid screenshot format')
    }

    if (!type || !comment) {
      throw new Error('Type and/or comment are empty')
    }

    const id = await this.feedbackRepository.create({ type, comment, screenshot })

    await this.serviceMailer.send({
      subject: 'Novo Feedback !!',
      body: [
        `<p>Tipo do feedback: ${ type }</p>`,
        `<p>Comentário: ${ comment }</p>`,
      ],
      screenshot
    });

    return id
  }
}
