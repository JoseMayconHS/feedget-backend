export interface FeedbackRepositoryCreateData {
  type: string,
  comment: string,
  screenshot?: string
}

export interface FeedbackRepository {
  create(data: FeedbackRepositoryCreateData): Promise<string>
}
