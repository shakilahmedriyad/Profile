import nodemailer from "nodemailer";
const email = process.env.NEXT_PUBLIC_USER;
const pass = process.env.NEXT_PUBLIC_PASS;
export const transporter = nodemailer.createTransport({
  //@ts-ignore
  service: "gmail",
  auth: {
    user: email,
    pass,
  },
});

export const mailOptions = {
  from: email,
  to: process.env.NEXT_PUBLIC_TO,
};
