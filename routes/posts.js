const express = require("express");
const router = express.Router();
const Post = require("../models/Post");

// Gets all post
router.get("/", async (req, res) => {
  try {
    const posts = await Post.find(); // Finds all the posts
    res.json(posts);
  } catch (err) {
    res.json({ msg: err }); // If it finds an error while doing so send json response of the error
  }
});

// Gets specific post
router.get("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id); // Finds specific post
    res.json(post);
  } catch (err) {
    res.json({ msg: err }); // If it finds an error while doing so send json response of the error
  }
});

// Deletes post
router.delete("/:id", async (req, res) => {
  try {
    const removedPost = await Post.remove({ _id: req.params.id }); // Removes post
    res.json(removedPost);
  } catch (err) {
    res.json({ msg: err }); // If it finds an error while doing so send json response of the error
  }
});

// Adds posts
router.post("/", async (req, res) => {
  const post = new Post({
    title: req.body.title,
    description: req.body.description,
  });

  try {
    const newPost = await post.save(); // Adds post
    res.json(newPost);
  } catch (err) {
    res.json({ msg: err }); // If it finds an error while doing so send json response of the error
  }
});

module.exports = router;
