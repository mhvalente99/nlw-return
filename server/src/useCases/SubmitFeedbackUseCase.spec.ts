import { SubmitFeedbackUseCase } from "./SubmitFeedbackUseCase";

describe("Submit feedback", () => {
  const submitFeedback = new SubmitFeedbackUseCase(
    { create: async () => undefined },
    { sendMail: async () => undefined }
  );

  it("should be able to submit a feedback", () => {
    expect(
      submitFeedback.execute({
        type: "BUG",
        comment: "example bug",
        screenshot: "data:image/png;base64,teste",
      })
    ).resolves.not.toThrow();
  });

  it("not should be able to submit feedback without type", () => {
    expect(
      submitFeedback.execute({
        type: "",
        comment: "example bug",
        screenshot: "data:image/png;base64,teste",
      })
    ).rejects.toThrow();
  });

  it("not should be able to submit feedback without comment", () => {
    expect(
      submitFeedback.execute({
        type: "BUG",
        comment: "",
        screenshot: "data:image/png;base64,teste",
      })
    ).rejects.toThrow();
  });

  it("not should be able to submit feedback with an invalid screenshot", () => {
    expect(
      submitFeedback.execute({
        type: "BUG",
        comment: "example bug",
        screenshot: "teste.jpg",
      })
    ).rejects.toThrow();
  });
});
