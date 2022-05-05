import nodemailer from "nodemailer";

import { IMailAdapter, ISendMailData } from "../IMailAdapter";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "0bf0fb448a423d",
    pass: "b91ffa627a5576",
  },
});

export class NodemailerMailAdapter implements IMailAdapter {
  async sendMail({ subject, body }: ISendMailData): Promise<void> {
    await transport.sendMail({
      from: "Equipe Feedget <oi@feedget.com>",
      to: "Matheus Valente <matheushenrique4@hotmail.com>",
      subject,
      html: body,
    });
  }
}
