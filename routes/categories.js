const router = require('express').Router();

const Category = require('../models/Category');

router.get('/', async (req, res) => {
    /**
     * in this request we got the :
     *      1- each category as objects
     *      2- parent object
     *      3- each child as object inside children array
     */
    try {
        //get all categories:
        const categories = await Category.find().populate('parent').populate('children');
        res.status(200).json(categories);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
});

router.get('/getOne', async(req, res) =>{
    /**
     * in this request we got: 
     *      1- category object 
     *      2- parent as object
     *      3- for each child object, inside the parent children array
     *      4- for each child object, inside category children array 
     *      5- and the parent for this child as object 
     */
    try {
        //check query: 
        if(!req.query.id){
            throw {message: 'add the category id in the request'}
        }
        const category = await Category.findById(req.query.id).populate({
            path: 'parent',
            populate: {
                path: 'children',
                populate: 'parent'
            }
        }).populate({path: 'children', populate: {path: 'parent'}})
        res.status(200).json(category);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
})

router.get('/addOne', async (req, res) =>{
    try {
        const category = new Category({
            title: 'new category will added'
        })
        await category.save();
        res.status(200).json(category);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
});

router.get('/addChild', async(req, res) =>{
    try {
        const parent = await Category.findById('5dba9a25a8caa82848480454');
        const category = new Category({
            title: 'child 2',
            parent: '5dba9a25a8caa82848480454'
        });
        await category.save();
        //append category to the parent categories children array: 
        parent.children.push(category._id);
        await parent.save();
        res.status(200).json(category);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
})

router.get('/deleteAll', async(req, res) =>{
    try {
        const deleted = await Category.deleteMany();
        res.status(200).json(deleted);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
})


module.exports = router;