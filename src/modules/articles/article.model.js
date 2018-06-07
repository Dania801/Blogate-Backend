import mongoose, { Schema } from 'mongoose';

const ArticleSchema = new Schema({
  title: {
    type: String,
    required: [true, 'Title is required!'],
    trim: true,
    minLength: [5, 'Title must be longer!'],
    maxlength: [50, 'Title must be shorter!'],
  },
  text: {
    type: String,
    required: [true, 'Text is required'],
    trim: true,
    minLength: [15, 'Text must be longer!'],
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
}, {
  timestamps: true,
});

export default mongoose.model('Article', ArticleSchema);
