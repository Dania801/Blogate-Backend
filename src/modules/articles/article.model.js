import mongoose, { Schema } from 'mongoose';
import slug from 'slug';
import uniqueValidator from 'mongoose-unique-validator';

const ArticleSchema = new Schema({
  title: {
    type: String,
    trim: true,
    required: [true, 'Title is required!'],
    minlength: [5, 'Title need to be longer!'],
    unique: true,
  },
  text: {
    type: String,
    trim: true,
    required: [true, 'Text is required!'],
    minlength: [15, 'Text need to be longer!'],
  },
  slug: {
    type: String,
    trim: true,
    lowercase: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
}, { timestamps: true });

ArticleSchema.plugin(uniqueValidator, {
  message: '{VALUE} already taken!',
});

ArticleSchema.pre('validate', function (next) {
  this._slugify();

  next();
});

ArticleSchema.methods = {
  _slugify() {
    this.slug = slug(this.title);
  },
};

ArticleSchema.statics = {
  createArticle(args, user) {
    return this.create({
      ...args,
      user,
    });
  },
};

export default mongoose.model('Article', ArticleSchema);
