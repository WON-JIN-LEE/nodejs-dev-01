// 몽고디비와 node 연결 설정 파일
const mongoose = require("mongoose");
require("dotenv").config();


const connet = () => {
  mongoose
    .connect(
      `mongodb://${process.env.MONGODB_USER}:${process.env.MONGODB_PW}@${process.env.MONGODB_KEY}:27017/admin`,
      {
        ignoreUndefined: true,
        dbName: "db_basic",
      }
    )
    .catch((err) => console.error(err));
};




module.exports = connet;
