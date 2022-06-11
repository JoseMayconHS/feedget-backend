import { prisma } from "../../prisma"
import { FeedbackRepository, FeedbackRepositoryCreateData } from "../FeedbackRepository"

export class PrismaFeedbackRepository implements FeedbackRepository {
  async create(data: FeedbackRepositoryCreateData): Promise<string> {
    let id = ''

    try {
      const prismaResponse = await prisma.feedback.create({
        data,
        select: {
          id: true
        }
      })

      id = prismaResponse.id
    } catch (e) {
      console.error('PrismaFeedbackRepository Error', e)
    } finally {
      return id
    }
  }
}
