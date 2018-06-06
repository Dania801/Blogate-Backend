import mongoose, { Schema } from 'mongoose';
import validator from 'validator';
import { hashSync } from 'bcrypt-nodejs';
import { passwordReg } from './user.validations';

const UserSchema = new Schema({
  email: {
    type: String,
    unique: true,
    required: [true, 'Email is required!'],
    trim: true,
    validate: {
      validator(email) {
        return validator.isEmail(email);
      },
      message: '{VALUE} is not a valid email!',
    },
  },
  firstName: {
    type: String,
    required: [true, 'First name is required!'],
    trim: true,
  },
  lastName: {
    type: String,
    required: [true, 'Last name is required!'],
    trim: true,
  },
  userName: {
    type: String,
    required: [true, 'User name is required!'],
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: [true, 'Password is required!'],
    trim: true,
    minLength: [6, 'Password needs to be longer!'],
    validate: {
      validator(password) {
        passwordReg.test(password);
      },
      message: '{VALUE} is not a valid password!',
    },
  },
});

UserSchema.pre('save', function (next) {
  if (this.isModified('password')) {
    this.password = this._hashPassword(this.password);
  }
  return next();
});

UserSchema.methods = {
  _hashPassword(password) {
    return hashSync(password);
  },
};

export default mongoose.model('User', UserSchema);
