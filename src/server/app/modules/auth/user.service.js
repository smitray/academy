import _ from 'lodash';
import { Crud } from '@utl';

import authModel from './auth.model';

class UserService extends Crud {
  constructor(model) {
    super(model);
    this.model = model;
  }

  async addCourse(options) {
    const record = await this.single(options.params);
    record.course.push(options.crId);
    return new Promise((resolve, reject) => {
      record.save().then((result) => {
        resolve(result);
      }).catch((e) => {
        reject(e);
      });
    });
  }

  async removeCourse(options) {
    let record = await this.single(options.params);
    record = _.remove(record, rec => rec.course._id === options.crId);
    return new Promise((resolve, reject) => {
      record.save().then((result) => {
        resolve(result);
      }).catch((e) => {
        reject(e);
      });
    });
  }
}

const userCrud = new UserService(authModel);

export default userCrud;
