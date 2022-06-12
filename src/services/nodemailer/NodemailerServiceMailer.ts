import nodemailer from 'nodemailer'

import { ServiceMailer, ServiceMailerConfig } from '../ServiceMailer'

export class NodemailerServiceMailer implements ServiceMailer {
  async send(config: ServiceMailerConfig): Promise<void> {

    const { subject, body: html, screenshot } = config

    const transport = nodemailer.createTransport({
      host: "smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: process.env.MAILTRAP_USER,
        pass: process.env.MAILTRAP_PASS,
      },
    })

    html.unshift("<div style='font-family: sans-serif; color: #222; fonte-weight: bold'>")

    if (screenshot) {
      html.push(`
        <img width="300" src="${ screenshot }" />
      `)
    }

    html.push('</div>')

    const mailerConfig: nodemailer.SendMailOptions = {
      from: 'Equipe Feedget <feedget@contato.com>',
      to: 'Maycon Silva <maycon@gmail.com>',
      subject, html: html.join('')
    }

    try {
      await transport.sendMail(mailerConfig)
    } catch (e) {
      console.error('NodemailerServiceMailer Error', e)
    }
  }
}
