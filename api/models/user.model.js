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
    required: '¡Oh! necesitamos tu nombre',
    minlength: [3, 'Por favor, ingresa un nombre de más de 3 letras']
  },
  email: {
    type: String,
    required: '¡Oh! necesitamos tu email',
    trim: true,
    unique: true,
    lowercase: true,
    match: [EMAIL_REGEX, 'email inválido, ¡Revísalo!']
  },
  password: {
    type: String,
    required: '¡Oh! necesitamos tu password, ¿lo recuerdas?',
    match: [PASSWORD_REGEX, 'El password debe tener más de 6 caracteres']
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