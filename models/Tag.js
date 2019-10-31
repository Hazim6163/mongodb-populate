const mongosse = require('mongoose');
const mongooseTime = require('mongoose-timestamp');

const tagSchema = new mongosse.Schema({
    name: {type: String, required: true},
    posts: [{type: mongosse.Schema.Types.ObjectId, ref: 'Post'}]
});

tagSchema.plugin(mongooseTime);
const Tag = new mongosse.model('Tag', tagSchema);


module.exports = Tag;