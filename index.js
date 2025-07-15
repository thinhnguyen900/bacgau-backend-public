const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post("/webhook", (req, res) => {
  const text = (req.body.text || "").toLowerCase();
  console.log("Voice content:", text);

  let reply = "Bác chưa hiểu rõ lắm, con nói lại được không?";
  if (text.includes("chào")) {
    reply = "Bác Gấu chào Muối nhé!";
  } else if (text.includes("yêu")) {
    reply = "Bác Gấu cũng yêu Muối nhiều lắm!";
  } else if (text.includes("mệt")) {
    reply = "Muối nghỉ ngơi một chút nha, bác ở đây nè.";
  }

  res.send(reply);
});

app.get("/ping", (req, res) => {
  res.send("Pong from Bác Gấu!");
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log("Bác Gấu lắng nghe tại cổng", PORT);
});