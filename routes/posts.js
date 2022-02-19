const express = require("express");
const moment = require("moment");

const Posts = require("../schemas/sch_posts");
const Comments = require("../schemas/sch_comments");

const router = express.Router();

// 전체 게시글 목록 조회 API
router.get("/posts", async (req, res) => {
  const posts = await Posts.find().sort({ date: -1 });
  res.json({ posts });
});

// 게시글 상세 조회 API
router.get("/posts/:postId", async (req, res) => {
  const postId = Number(req.params.postId);
  if (!postId) {
    return res
      .status(400)
      .json({ success: false, errorMessage: "요청이 올바르지 않습니다." });
  }

  const detail = await Posts.findOne({ post_id: postId });
  res.json({ detail });
});

// 게시글 추가 API
router.post("/posts", async (req, res) => {
  const { name, title, content } = req.body;

  if (!name || !title || !content) {
    return res
      .status(400)
      .json({ success: false, errorMessage: "내용을 입력해주세요." });
  }

  await Posts.create({ name, title, content });

  res.status(201).send({ success: true });
});

// 게시글 수정 API
router.put("/posts/:postId", async (req, res) => {
  const postId = Number(req.params.postId);

  if (!postId) {
    return res
      .status(400)
      .json({ success: false, errorMessage: "요청이 올바르지 않습니다." });
  }

  const { name, title, content } = req.body;

  const esistsPosts = await Posts.find({ post_id: postId });

  if (!esistsPosts.length) {
    return res
      .status(400)
      .json({ success: false, errorMessage: "게시글이 존재하지 않습니다." });
  }
  if (!name || !title || !content) {
    return res
      .status(400)
      .json({ success: false, errorMessage: "내용을 입력해주세요." });
  }

  await Posts.updateOne(
    {
      post_id: postId,
    },
    {
      $set: {
        name,
        title,
        content,
        date: moment(),
      },
    }
  );
  res.json({ success: true });
});

// 게시글 삭제 API
router.delete("/posts/:postId", async (req, res) => {
  const postId = Number(req.params.postId);

  if (!postId) {
    return res
      .status(400)
      .json({ success: false, errorMessage: "요청이 올바르지 않습니다." });
  }
  await Posts.deleteOne({ post_id: postId });
  res.json({ success: true });
});

// =======================================================
//  댓글 목록 조회 API
router.get("/posts/:postId/comments", async (req, res) => {
  const postId = Number(req.params.postId);
  if (!postId) {
    return res
      .status(400)
      .json({ success: false, errorMessage: "요청이 올바르지 않습니다." });
  }

  const comments = await Comments.find({ post_id: postId }).sort({ date: -1 });
  res.json({ comments });
});

// 댓글 작성 API
router.post("/posts/:postId/comments", async (req, res) => {
  const postId = Number(req.params.postId);
  if (!postId) {
    return res
      .status(400)
      .json({ success: false, errorMessage: "요청이 올바르지 않습니다." });
  }
  const { name, comment } = req.body;

  const esistsPosts = await Posts.find({ post_id: postId });

  if (!esistsPosts.length) {
    return res
      .status(400)
      .json({ success: false, errorMessage: "게시글이 존재하지 않습니다." });
  }

  if (!name || !comment) {
    return res
      .status(400)
      .json({ success: false, errorMessage: "댓글 내용을 입력해주세요." });
  }

  await Comments.create({ name, comment, post_id: postId });

  res.status(201).send({ success: true });
});

// 댓글 수정 API
router.put("/posts/:postId/comments/:commentId", async (req, res) => {
  const postId = Number(req.params.postId);
  const commentId = Number(req.params.commentId);

  if (!postId || !commentId) {
    return res
      .status(400)
      .json({ success: false, errorMessage: "요청이 올바르지 않습니다." });
  }
  const { name, comment } = req.body;

  const esistsComments = await Comments.find({
    post_id: postId,
    comment_id: commentId,
  });

  if (!esistsComments.length) {
    return res
      .status(400)
      .json({ success: false, errorMessage: "댓글이 존재하지 않습니다." });
  }
  if (!name || !comment) {
    return res
      .status(400)
      .json({ success: false, errorMessage: "댓글 내용을 입력해주세요." });
  }

  await Comments.updateOne(
    {
      post_id: postId,
      comment_id: commentId,
    },
    {
      $set: {
        name,
        comment,
        date: moment(),
      },
    }
  );
  res.json({ success: true });
});

// 댓글 삭제 API
router.delete("/posts/:postId/comments/:commentId", async (req, res) => {
  const postId = Number(req.params.postId);
  const commentId = Number(req.params.commentId);

  if (!postId || !commentId) {
    return res
      .status(400)
      .json({ success: false, errorMessage: "요청이 올바르지 않습니다." });
    }
    
  const esistsComments = await Comments.find({
    post_id: postId,
    comment_id: commentId,
  });

  if (!esistsComments.length) {
    return res
      .status(400)
      .json({ success: false, errorMessage: "댓글이 존재하지 않습니다." });
  }

  await Comments.deleteOne({
    post_id: postId,
    comment_id: commentId,
  });
  res.json({ success: true });
});

module.exports = router;
