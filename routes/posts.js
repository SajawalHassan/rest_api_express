const express = require("express");
const router = express.Router();
const Post = require("../models/Post");

router.get("/", async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (err) {
    res.json({ msg: err });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    res.json(post);
  } catch (err) {
    res.json({ msg: err });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    await Post.remove({ _id: req.params.id });
    res.json({ msg: "Post has been deleted" });
  } catch (err) {
    res.json({ msg: err });
  }
});

router.post("/", async (req, res) => {
  const post = new Post({
    title: req.body.title,
    description: req.body.description,
  });

  try {
    const newPost = await post.save();
    res.json(newPost);
  } catch (err) {
    res.json({ msg: err });
  }
});

module.exports = router;
