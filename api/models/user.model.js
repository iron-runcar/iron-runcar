const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const SALT_WORK_FACTOR = 10;
const Schema = mongoose.Schema;

const EMAIL_REGEX = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
const PASSWORD_REGEX = /.{6,}/;
const ADMIN_EMAIL = process.env.ADMIN_EMAIL;

const userSchema = new Schema({
  name: {
    type: String,
    required: 'User name is required',
    minlength: [3, 'User name deeds at least 3 chars']
  },
  email: {
    type: String,
    required: 'User email is required',
    trim: true,
    unique: true,
    lowercase: true,
    match: [EMAIL_REGEX, 'Invalid email pattern']
  },
  password: {
    type: String,
    required: 'User password is required',
    match: [PASSWORD_REGEX, 'Password needs at least 6 chars']
  },
  role: {
    type: String,
    enum: ['admin', 'guess'],
    default: 'guess'
  }
}, {
  timestamps: true,
  toJSON: {
    transform: (doc, user) => {
      user.id = user._id;

      delete user._id;
      delete user.__v;
      delete user.password;

      return user;
    }
  }
});

userSchema.pre('save', function (next) {

  if (this.email === ADMIN_EMAIL) {
    this.role = 'admin';
  }

  if (this.isModified('password')) {
    bcrypt.hash(this.password, SALT_WORK_FACTOR)
      .then(hash => {
        this.password = hash;
        next();
      })
      .catch(error => next(error))
  }

});

userSchema.methods.checkPassword = function (passwordToCheck) {
  return bcrypt.compare(passwordToCheck, this.password);
}

userSchema.methods.isAdmin = function () {
  return this.role === 'admin';
}

const User = mongoose.model('User', userSchema);
module.exports = User;