import express from "express";
import nodemailer from "nodemailer";

import { prisma } from "./prisma";

export const routes = express.Router();

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "0bf0fb448a423d",
    pass: "b91ffa627a5576",
  },
});

routes.post("/feedbacks", async (request, response) => {
  const { type, comment, screenshot } = request.body;

  await prisma.feedback.create({
    data: {
      type,
      comment,
      screenshot,
    },
  });

  await transport.sendMail({
    from: "Equipe Feedget <oi@feedget.com>",
    to: "Matheus Valente <matheushenrique4@hotmail.com>",
    subject: "Novo feedback",
    html: [`<p>Tipo do feedback ${type}`, `<p>Comentário: ${comment}</p>`].join(
      "\n"
    ),
  });

  return response.status(201).send();
});
