// 몽고디비와 node 연결 설정 파일
const mongoose = require("mongoose");

// 로컬에서 AWS의 몽고디비에 연결
// const connet = () => {
//   mongoose
//     .connect("mongodb://test:test@52.79.240.36:27017/admin", {
//       ignoreUndefined: true,
//       dbName: "db_basic",
//     })
//     .catch((err) => console.error(err));
// };


// 로컬환경에서 내 로컬의 몽고디비에 연결
const connet = () => {
  mongoose
    .connect("mongodb://localhost:27017", {
      dbName: "db_basic",
      ignoreUndefined: true,
    })
    .catch((err) => console.error(err));
};


module.exports = connet;
