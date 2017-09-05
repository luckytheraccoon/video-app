import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const VideoSchema = new Schema({
  title: {
    type: String
  },
  description: {
    type: String
  },
  thumbnailUrl: {
    type: String
  },
  videoUrl: {
    type: String
  },
});

module.exports = mongoose.model('Videos', VideoSchema);