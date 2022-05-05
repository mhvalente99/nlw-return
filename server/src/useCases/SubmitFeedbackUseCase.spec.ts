import { SubmitFeedbackUseCase } from "./SubmitFeedbackUseCase";

describe("Submit feedback", () => {
  const createFeedbackSpy = jest.fn();
  const sendMailSpy = jest.fn();

  const submitFeedback = new SubmitFeedbackUseCase(
    { create: createFeedbackSpy },
    { sendMail: sendMailSpy }
  );

  it("should be able to submit a feedback", async () => {
    await expect(
      submitFeedback.execute({
        type: "BUG",
        comment: "example bug",
        screenshot: "data:image/png;base64,teste",
      })
    ).resolves.not.toThrow();

    expect(createFeedbackSpy).toHaveBeenCalled();
    expect(sendMailSpy).toHaveBeenCalled();
  });

  it("not should be able to submit feedback without type", async () => {
    await expect(
      submitFeedback.execute({
        type: "",
        comment: "example bug",
        screenshot: "data:image/png;base64,teste",
      })
    ).rejects.toThrow();
  });

  it("not should be able to submit feedback without comment", async () => {
    await expect(
      submitFeedback.execute({
        type: "BUG",
        comment: "",
        screenshot: "data:image/png;base64,teste",
      })
    ).rejects.toThrow();
  });

  it("not should be able to submit feedback with an invalid screenshot", async () => {
    await expect(
      submitFeedback.execute({
        type: "BUG",
        comment: "example bug",
        screenshot: "teste.jpg",
      })
    ).rejects.toThrow();
  });
});
