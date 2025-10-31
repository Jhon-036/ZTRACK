import mongoose from "mongoose";
import bcrypt from 'bcrypt'

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
}, {
  timestamps: true
})

userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next()
  try {
    this.password = await bcrypt.hash(this.password, 10)
    next()
  } catch (err) {
    next(err)
  }
})

userSchema.methods.comparePassword = function(isPassword) {
  return bcrypt.compare(isPassword, this.password)
}

userSchema.set('toJSON', {
  transform: (doc, ret) => {
    ret.id = ret._id.toString()
    delete ret._id
    delete ret.__v
    delete ret.password
    return ret
  }
})

export default mongoose.model('User', userSchema)