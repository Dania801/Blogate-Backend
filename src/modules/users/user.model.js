import mongoose, { Schema } from 'mongoose';
import validator from 'validator';
import { hashSync, compareSync } from 'bcrypt-nodejs';
import jwt from 'jsonwebtoken';
import uniqueValidator from 'mongoose-unique-validator';
import { passwordReg } from './user.validations';
import constants from '../../config/constants';

const UserSchema = new Schema({
  email: {
    type: String,
    unique: true,
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
    trim: true,
    minLength: [6, 'Password needs to be longer!'],
    validate: {
      validator(password) {
        passwordReg.test(password);
      },
      message: '{VALUE} is not a valid password!',
    },
  },
  twitterId: {
    type: String,
    trim: true,
    unique: true,
  },
  photo: {
    data: Buffer,
    contentType: String,
  },
}, {
  timestamps: true,
});

UserSchema.plugin(uniqueValidator, {
  message: '{VALUE} already taken!',
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
  authenticateUser(password) {
    return compareSync(password, this.password);
  },
  createToken() {
    return jwt.sign({ _id: this._id }, constants.JWT_SECRET);
  },
  toJSON() {
    return {
      userName: this.userName,
      firstName: this.firstName,
      lastName: this.lastName,
      photo: this.photo,
    };
  },
  toJsonAuth() {
    return {
      _id: this._id,
      userName: this.userName,
      token: `JWT ${this.createToken()}`,
    };
  },
};

export default mongoose.model('User', UserSchema);
