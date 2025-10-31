import mongoose from "mongoose";

const examSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  lastname: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  gender: {
    trype: String,
    required: true
  },
  studenId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Studen',
    required: true
  }
}, {
  timestamps: true
})

userSchema.set('toJSON', {
  transform: (doc, ret) => {
    ret.id = ret._id.toString()
    delete ret._id
    delete ret.__v
    return ret
  }
})

export default mongoose.model('Exam', examSchema)