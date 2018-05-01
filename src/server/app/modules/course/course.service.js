// import _ from 'lodash';
import { Crud } from '@utl';

import courseModel from './course.model';
import { lectureCrud } from './lecture.model';
import { contentCrud } from './content.model';
import { filesModel } from '../files';
import { userCrud } from '../auth';

const { filesCrud } = filesModel;

class CourseService extends Crud {
  constructor(model) {
    super(model);
    this.model = model;
    this.lectureCrud = lectureCrud;
    this.contentCrud = contentCrud;
    this.filesCrud = filesCrud;
    this.userCrud = userCrud;
  }

  async createCourse(options) {
    const {
      title,
      category,
      description,
      author
    } = options;

    const record = await this.create({
      title,
      category,
      description,
      author
    });

    const user = await this.userCrud.single({
      qr: {
        _id: author
      }
    });

    user.authorCourse.push(record._id);

    return new Promise((resolve, reject) => {
      user.save().then(() => {
        resolve(record);
      }).catch((e) => {
        reject(e);
      });
    });
  }

  async addLecture(options) {
    const lecture = await this.lectureCrud.create(options.body);
    const record = await this.single(options.params);
    record.lecture.push(lecture._id);
    return new Promise((resolve, reject) => {
      record.save().then(() => {
        resolve(lecture);
      }).catch((e) => {
        reject(e);
      });
    });
  }

  async addContent(options) {
    const {
      title,
      file,
      ctType,
      order
    } = options.body;
    const content = await this.contentCrud.create({
      title,
      ctType,
      order,
      file
    });
    const record = await this.lectureCrud.single(options.params);
    record.content.push(content._id);
    return new Promise((resolve, reject) => {
      record.save().then(() => {
        resolve(content);
      }).catch((e) => {
        reject(e);
      });
    });
  }
}

const courseCrud = new CourseService(courseModel);

export default courseCrud;