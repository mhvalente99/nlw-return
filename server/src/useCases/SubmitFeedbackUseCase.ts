import { IMailAdapter } from "../adapters/IMailAdapter";
import { IFeedbacksRepository } from "../repositories/IFeedbacksRepository";

interface ISubmitFeedbackUseCaseRequest {
  type: string;
  comment: string;
  screenshot?: string;
}

export class SubmitFeedbackUseCase {
  constructor(
    private feedbacksRepository: IFeedbacksRepository,
    private mailAdapter: IMailAdapter
  ) {}

  async execute(request: ISubmitFeedbackUseCaseRequest) {
    const { type, comment, screenshot } = request;

    await this.feedbacksRepository.create({
      type,
      comment,
      screenshot,
    });

    await this.mailAdapter.sendMail({
      subject: "Novo Feedback",
      body: [
        `<p>Tipo do feedback ${type}`,
        `<p>Comentário: ${comment}</p>`,
      ].join("\n"),
    });
  }
}
