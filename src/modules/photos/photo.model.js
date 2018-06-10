import mongoose, { Schema } from 'mongoose';

const PhotoSchema = new Schema({
  photo: {
    data: Buffer,
    contentType: String,
  },
  caption: {
    type: String,
    trim: true,
    minlength: [5, 'Caption need to be longer!'],
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
}, { timestamps: true });

PhotoSchema.methods = {
  toJSON() {
    return {
      _id: this._id,
      photo: this.photo,
      caption: this.caption,
      user: this.user,
    };
  },
};

PhotoSchema.statics = {
  addPhoto(photo, user) {
    return this.create({
      ...photo,
      user,
    });
  },
  photosList({ skip = 0, limit = 0 } = {}) {
    return this.find()
      .sort()
      .limit(limit)
      .skip(skip)
      .populate('user');
  },
};

export default mongoose.model('Photo', PhotoSchema);
