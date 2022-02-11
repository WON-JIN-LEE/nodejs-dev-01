const express = require("express");
const app = express();

const port = 3000;
const goodsRouter = require("./routes/goods");

app.use((req, res, next) => {
  console.log("Request URL: ", req.originalUrl, "-", new Date());
  next();
});

app.use("/api", [goodsRouter]);

app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(port, () => {
  console.log(port, "포트로 서버가 열렸어요!");
});
