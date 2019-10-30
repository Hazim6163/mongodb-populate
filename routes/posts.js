const router = require('express').Router();

const Post = require('../models/Post');

//get all posts:
router.get('/', async (req, res) => {
    try {
        //add post: 
        // const post = new Post();
        // post.title = 'post 1';
        // post.save();

        //delete all posts:
        //await Post.deleteMany();

        //delete one by id :
        //await Post.deleteOne({_id: post._id});
        

        const posts = await Post.find();
        res.status(200).json(posts);
    } catch (error) {
        return res.status(400).json({ error: message })
    }
})

module.exports = router;