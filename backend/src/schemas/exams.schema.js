import mongoose from "mongoose";

const examSchema = new mongoose.Schema({
  clas: {
    type: String,
    enum: ['Cálculo I', 'Cálculo II', 'Álgebra Lineal', 'Física General', 'Ingles I', 'Ingles II'],
    required: true
  },
  note: {
    type: Number,
    required: true
  },
  studentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Student',
    required: true
  }
}, {
  timestamps: true
})

examSchema.set('toJSON', {
  transform: (doc, ret) => {
    ret.id = ret._id.toString()
    delete ret._id
    delete ret.__v
    return ret
  }
})

export default mongoose.model('Exam', examSchema)