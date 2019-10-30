const mongosse = require('mongoose');
const mongooseTime = require('mongoose-timestamp');

const postSchema = new mongosse.Schema({
    title: {type: String, required: true}
});

postSchema.plugin(mongooseTime);
const Post = new mongosse.model('Post', postSchema);


module.exports = Post;