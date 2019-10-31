const mongoose = require('mongoose');
const mongosseTime = require('mongoose-timestamp');

//category
const catSchema = new mongoose.Schema({
    title: {type: String, required: true},
    parent: {type: mongoose.Schema.Types.ObjectId, ref: 'Category'},
    children: [{type: mongoose.Schema.Types.ObjectId, ref: 'Category'}]
});


catSchema.plugin(mongosseTime);
const Category = new mongoose.model('Category', catSchema);


module.exports = Category;