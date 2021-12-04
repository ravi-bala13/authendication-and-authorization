const express = require("express");

const Post = require("../models/post.model");

const authenticate = require("../middlewares/athendicate");

const router = express.Router();

router.post("/", authenticate, async(req, res) => {
    try {
        const user = req.user;
        // console.log('req.user:', req.user)
        
        const post = await Post.create({
            title: req.body.title,
            body: req.body.body,
            user: user.user._id
        });

        return res.status(201).json({post});
    } catch (e) {
        return res.status(500).json({status: "Failed", message: e.message})
    }
});

module.exports = router;