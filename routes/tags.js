const router = require('express').Router();

const Tag = require('../models/Tag');

//get all tags:
router.get('/', async (req, res) => {
    try {
        

        //delete all posts:
        //await Post.deleteMany();

        //delete one by id :
        //await Post.deleteOne({_id: post._id});
        

        const tags = await Tag.find().populate({
            path: 'posts',
            populate: {path: 'tags'}
        });
        res.status(200).json(tags);
    } catch (error) {
        return res.status(400).json({ error: message })
    }
})

router.get('/addTag', async(req, res) =>{
    try {
        // add tag: 
        const tag = new Tag({
            name: 'Tag 1'
        });
        tag.save();
        res.status(201).json(tag);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
        
});

module.exports = router;