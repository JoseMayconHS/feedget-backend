export interface ServiceMailerConfig {
  subject: string,
  body: string[]
}

export interface ServiceMailer {
  send(config: ServiceMailerConfig): Promise<void>
}
