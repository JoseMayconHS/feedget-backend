export interface ServiceMailerConfig {
  subject: string,
  body: string[],
  screenshot?: string
}

export interface ServiceMailer {
  send(config: ServiceMailerConfig): Promise<void>
}
