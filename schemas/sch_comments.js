const mongoose = require("mongoose");
const autoIncrement = require("mongoose-auto-increment");
autoIncrement.initialize(mongoose.connection);

// required: true, 필수 값인가 unique: true, 고유 값인가 (중복 X)
const commentsSchema = new mongoose.Schema({
  comment_id: {
    type: Number,
    default: 1,
  },
  name: {
    type: String,
    required: true,
  },
  comment: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
    default: Date.now,
  },
  post_id: {
    type: Number,
    required: true,
  },
});

commentsSchema.plugin(autoIncrement.plugin, {
  model: "comments",
  field: "comment_id",
  startAt: 1, //시작
  increment: 1, // 증가
});

// mongoose.model("Goods", goodsSchema);
// 1.모델을 만드는데 첫번째 인자는 몽고디비 컬렉션의 이름, 두번째는 도큐먼트를 지정한 스키마를 넘긴다.
// 2.컬렉션 이름을 대문자로 넘겨도 robo3t에서는 소문자로 표기됨
module.exports = mongoose.model("Comments", commentsSchema);
