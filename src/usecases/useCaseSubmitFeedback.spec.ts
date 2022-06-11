import { UseCaseSubmitFeedback } from './useCaseSubmitFeedback'

const createFeedbackSpy = jest.fn()
const sendEmailSpy = jest.fn()

const useCaseSubmitFeedback = new UseCaseSubmitFeedback(
  { create: createFeedbackSpy }, { send: sendEmailSpy }
)

describe('Feedback submit', () => {
  it('should be able send feedback submit', async () => {
    await expect(useCaseSubmitFeedback.execute({
      type: 'BUG',
      comment: 'Comment example',
      screenshot: 'data:image/png;base64,23423423423'
    }))
      .resolves
      .not.toThrow()

    expect(createFeedbackSpy).toBeCalled()
    expect(sendEmailSpy).toBeCalled()
  })

  it('should not be able send feedback submit without comment', async () => {
    await expect(useCaseSubmitFeedback.execute({
      type: 'BUG',
      comment: '',
      screenshot: 'data:image/png;base64,23423423423'
    })).rejects.toThrow()
  })

  it('should not be able send feedback submit without type', async () => {
    await expect(useCaseSubmitFeedback.execute({
      // @ts-ignore
      type: '',
      comment: 'Comment example',
      screenshot: 'data:image/png;base64,23423423423'
    })).rejects.toThrow()
  })

  it('should not be able send feedback submit with invalid screenshot format', async () => {
    await expect(useCaseSubmitFeedback.execute({
      type: 'BUG',
      comment: 'Comment example',
      screenshot: 'image/png;base64,23423423423'
    })).rejects.toThrow()
  })
})
