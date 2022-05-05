import { prisma } from "../../prisma";
import {
  IFeedbackCreateData,
  IFeedbacksRepository,
} from "../IFeedbacksRepository";

export class PrismaFeedbacksRepository implements IFeedbacksRepository {
  async create({
    type,
    comment,
    screenshot,
  }: IFeedbackCreateData): Promise<void> {
    await prisma.feedback.create({
      data: {
        type,
        comment,
        screenshot,
      },
    });
  }
}
