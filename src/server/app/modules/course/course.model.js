import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';
import timestamp from 'mongoose-timestamp';

const courseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  status: {
    type: String,
    default: 'review'
  },
  lecture: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'lectureModel',
    default: null
  }],
  courseTest: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'testModel',
    default: null
  },
  students: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'authModel',
    default: null
  }],
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'authModel',
    required: true
  },
  price: {
    type: Number,
    default: 10
  }
});

courseSchema.plugin(uniqueValidator);
courseSchema.plugin(timestamp);

const courseModel = mongoose.model('courseModel', courseSchema);

export default courseModel;
