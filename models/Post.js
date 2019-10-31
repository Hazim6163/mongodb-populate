const mongosse = require('mongoose');
const mongooseTime = require('mongoose-timestamp');

const postSchema = new mongosse.Schema({
    title: {type: String, required: true},
    des: {type: String, required: true},
    body: {type: String, required: true},
    tags: [{type: mongosse.Schema.Types.ObjectId, required: true, ref:'Tag'}]
});

postSchema.plugin(mongooseTime);
const Post = new mongosse.model('Post', postSchema);


module.exports = Post;