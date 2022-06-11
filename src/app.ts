import express from 'express'
import nodemailer from 'nodemailer'

import { prisma } from './prisma'

const app = express()

app.use(express.json())

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: process.env.MAILTRAP_USER,
    pass: process.env.MAILTRAP_PASS
  }
});

type FeedbackBody = {
  type: string, comment: string, screenshot?: string
}

app.post('/feedback', async (req, res) => {
  const { type, comment, screenshot } = req.body as FeedbackBody

  const feedback = await prisma.feedback.create({
    data: {
      type, comment, screenshot
    }
  })

  await transport.sendMail({
    from: 'Equipe Feedget <equipe@feedget.com>',
    to: 'Maycon Silva <jose.maycon.hermogenes.silva@gmail.com>',
    subject: 'Novo Feedback',
    html: `
      <div style="font-family: sans-serif; font-size: 16px; color: #222, font-weight: bold">
        <p>Tipo do feedback: ${ type }</p>
        <p>Comentário: ${ comment }</p>
      </div>
    `.trim()
  })

  res.status(201).json({ data: feedback })
})

export {
  app
}
