export type FeedbackRepositoryCreateDataType =  'BUG' | 'IDEA' | 'OTHER'

export interface FeedbackRepositoryCreateData {
  type: FeedbackRepositoryCreateDataType;
  comment: string;
  screenshot?: string;
}

export interface FeedbackRepository {
  create(data: FeedbackRepositoryCreateData): Promise<string>
}
