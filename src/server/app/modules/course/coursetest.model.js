import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';
import timestamp from 'mongoose-timestamp';
import { Crud } from '@utl';

const courseTestSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  questions: [{
    question: {
      type: String
    },
    answers: [{
      answer: {
        type: String
      },
      correct: {
        type: String
      }
    }]
  }],
  course: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'courseModel',
    required: true
  }
});

courseTestSchema.plugin(uniqueValidator);
courseTestSchema.plugin(timestamp);

const testModel = mongoose.model('testModel', courseTestSchema);
const testCrud = new Crud(testModel);

export {
  testModel,
  testCrud
};
