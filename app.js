const express = require("express");

// index 파일명은 생략가능
const connet = require("./schemas");
const app = express();
const port = 3000;

connet();
const postsRouter = require("./routes/posts");


// Request log
const requestMiddleware = (req, res, next) => {
  console.log("Request URL: ", req.originalUrl, "-", new Date());
  next();
};

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(requestMiddleware);

app.use("/api", [postsRouter]);

app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(port, () => {
  console.log(port, "포트로 서버가 열렸어요!");
});
