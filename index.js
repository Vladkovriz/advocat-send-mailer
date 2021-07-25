require("dotenv").config();
const express = require("express");
const cors = require("cors");

const mailService = require("./service/mail-service");

const app = express();

app.use(express.json());
app.use(
  cors({
    credentials: true,
    origin: `${process.env.CLIENT_URL}`,
  })
);
app.post("/send-mail", async (req, res) => {
  console.log(req.body);
  await mailService.sendActivationMail(
    req.body.email,
    `${process.env.API_URL}/api/activate`
  );
  res.json({ qwe: "sdf" });
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log("8000");
});
