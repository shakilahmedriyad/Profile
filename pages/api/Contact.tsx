import { mailOptions, transporter } from "@/components/NodeMailer/index.";
import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";

const handler: NextApiHandler = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  try {
    const data = req.body;
    console.log(data);
    if (!data || !data.name || !data.email || !data.message)
      return res.status(500).send("bad request");

    await transporter.sendMail({
      ...mailOptions,
      subject: "collab",
      text: data.name + "\n" + data.message + " " + data.email,
    });
    res.send("ok");
  } catch (error: any) {
    res.status(400).send(error.message);
  }
};

export default handler;
