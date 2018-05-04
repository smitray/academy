import _ from 'lodash';
import { Crud } from '@utl';

import courseModel from './course.model';
import { lectureCrud } from './lecture.model';
import { contentCrud } from './content.model';
import { testCrud } from './coursetest.model';
import { filesModel } from '../files';
import { userCrud, authModel } from '../auth';

const { filesCrud } = filesModel;

class CourseService extends Crud {
  constructor(model) {
    super(model);
    this.model = model;
    this.lectureCrud = lectureCrud;
    this.contentCrud = contentCrud;
    this.filesCrud = filesCrud;
    this.userCrud = userCrud;
    this.testCrud = testCrud;
    this._ = _;

    this.authModel = authModel;
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

  async createTest(options) {
    const testRecord = await this.testCrud.create(options);
    const record = await this.single({
      qr: {
        _id: options.course
      }
    });
    record.courseTest = testRecord._id;
    return new Promise((resolve, reject) => {
      record.save().then(() => {
        resolve(testRecord);
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

  async enrollStudent(options) {
    const record = await this.single(options.params);
    record.students.push(options.body.uid);
    const user = await this.userCrud.single({
      qr: {
        _id: options.body.uid
      }
    });
    user.studentCourse.push(record._id);
    await user.save();
    return new Promise((resolve, reject) => {
      record.save().then((result) => {
        resolve(result);
      }).catch((e) => {
        reject(e);
      });
    });
  }

  async removeEnroll(options) {
    return new Promise(async (resolve, reject) => {
      let record;
      let user;
      try {
        record = await this.singleUpdate({
          qr: options.params.qr,
          opt: {
            $pull: {
              students: options.body.uid
            }
          }
        });
        user = await this.userCrud.singleUpdate({
          qr: {
            _id: options.body.uid
          },
          select: 'studentCourse',
          populate: [{
            path: 'studentCourse',
            model: 'courseModel',
            select: 'title createdAt courseTest'
          }],
          opt: {
            $pull: {
              studentCourse: record._id
            }
          }
        });
      } catch (e) {
        reject(e);
      } finally {
        resolve(user);
      }
    });
  }
}

const courseCrud = new CourseService(courseModel);

export default courseCrud;
