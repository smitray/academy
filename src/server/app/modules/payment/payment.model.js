import mongoose from 'mongoose';
// import uniqueValidator from 'mongoose-unique-validator';
// import timestamp from 'mongoose-timestamp';
import { Crud } from '@utl';

const paymentSchema = new mongoose.Schema({

});

// paymentSchema.plugin(uniqueValidator);
// paymentSchema.plugin(timestamp);

const paymentModel = mongoose.model('paymentModel', paymentSchema);
const paymentCrud = new Crud(paymentModel);

export {
  paymentCrud,
  paymentModel
};
