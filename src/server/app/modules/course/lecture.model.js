import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';
import timestamp from 'mongoose-timestamp';
import { Crud } from '@utl';

const lectureSchema = new mongoose.Schema({
  title: {
    type: String,
    reuired: true
  },
  content: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'contentModel'
  }]
});

lectureSchema.plugin(uniqueValidator);
lectureSchema.plugin(timestamp);

const lectureModel = mongoose.model('lectureModel', lectureSchema);
const lectureCrud = new Crud(lectureModel);

export {
  lectureCrud,
  lectureModel
};
