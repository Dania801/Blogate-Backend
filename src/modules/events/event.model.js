import mongoose, { Schema } from 'mongoose';

const EventSchema = new Schema({
  title: {
    type: String,
    required: [true, 'Event title is required!'],
    trim: true,
    minlength: [5, 'Event title need to be longer!'],
    maxlength: [50, 'Event title need to be shorter!'],
  },
  description: {
    type: String,
    trim: true,
    minlength: [10, 'Event description need to be longer!'],
    maxlength: [200, 'Event description need to be shorter!'],
  },
  startDate: {
    type: Date,
    required: [true, 'Begin date is required!'],
    trim: true,
  },
  endDate: {
    type: Date,
    trim: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
}, { timestamps: true });

EventSchema.pre('save', function (next) {
  if (!this.endDate) {
    this.endDate = this.startDate;
  }
  next();
});

EventSchema.methods = {
  toJson() {
    return {
      _id: this._id,
      title: this.title,
      description: this.description,
      startDate: this.startDate,
      endDate: this.endDate,
      user: this.user,
    };
  },
};

EventSchema.statics = {
  createEvent(args, user) {
    return this.create({
      ...args,
      user,
    });
  },
};

export default mongoose.model('Event', EventSchema);
