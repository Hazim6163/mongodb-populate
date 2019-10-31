const router = require('express').Router();

const Post = require('../models/Post');
const Tag = require('../models/Tag');

//get all posts:
router.get('/', async (req, res) => {
    try {
        

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

router.get('/getOne', async(req, res) =>{
    try {
        if(!req.query.id){
            throw {message: 'add the post id in the request'}
        }
        const id = req.query.id;
        const post = await Post.findById(id).populate('tags');
        res.status(200).json(post);
    } catch (error) {
        res.status(400).json({error: error.message})
    }

});

router.get('/addPost', async(req, res) =>{
    try {
        const tags = ['5dba7d7ae842b83c84344755', '5dba8e26991c841d640d2add']
        for (let i = 0; i < tags.length; i++) {
            const id = tags[i];
            const tag = await Tag.findById(id)
            tag.posts.push('5dba835c3d324119ac9ddaf0');
            tag.save()
        }
        // add post: 
        // const post = new Post({
        //     title: 'Post 3 title',
        //     des: 'Post 3 Description',
        //     body: 'Post 3 Body',
        //     tags: ['5dba7d7ae842b83c84344755', '5dba7eab7fb2bf4fe0d1122d', 'another tag id and so on']
        // });
        // post.save();
        res.status(201).json(post);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
});

module.exports = router;