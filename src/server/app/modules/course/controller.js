import courseCrud from './course.service';
import { testCrud } from './coursetest.model';


let courses;
let course;
let courseNew;

const courseAll = async (ctx) => {
  try {
    courses = await courseCrud.get();
  } catch (e) {
    ctx.throw(404, {
      success: 0,
      message: e.message
    });
  } finally {
    ctx.body = {
      success: 1,
      data: {
        courses
      },
      message: 'Course created successfully'
    };
  }
};

const courseSingle = async (ctx) => {
  try {
    course = await courseCrud.single({
      qr: {
        _id: ctx.params.id
      },
      select: 'title category description lecture author price students',
      populate: [{
        path: 'lecture',
        model: 'lectureModel',
        populate: [{
          path: 'content',
          model: 'contentModel',
          populate: [{
            path: 'file',
            model: 'filesModel'
          }]
        }]
      }, {
        path: 'author',
        model: 'authModel',
        select: 'name'
      }]
    });
  } catch (e) {
    ctx.throw(404, {
      success: 0,
      message: e.message
    });
  } finally {
    ctx.body = {
      success: 1,
      data: {
        course
      },
      message: 'Course found'
    };
  }
};

const courseCreate = async (ctx) => {
  const {
    title,
    category,
    description
  } = ctx.request.body;
  try {
    courseNew = await courseCrud.createCourse({
      title,
      category,
      description,
      author: ctx.state.user.uid
    });
  } catch (e) {
    ctx.throw(422, {
      success: 0,
      message: e.message
    });
  } finally {
    ctx.body = {
      success: 1,
      data: {
        course: courseNew
      },
      message: 'Course created successfully'
    };
  }
};

const courseUpdate = async (ctx) => {
  try {
    course = await courseCrud.put({
      params: {
        qr: {
          _id: ctx.params.id
        }
      },
      body: ctx.request.body
    });
  } catch (e) {
    ctx.throw(422, {
      success: 0,
      message: e.message
    });
  } finally {
    ctx.body = {
      body: course
    };
  }
};

const courseDelete = async (ctx) => {
  try {
    course = await courseCrud.delete({ _id: ctx.params.id });
  } catch (e) {
    ctx.throw(404, e.message);
  } finally {
    ctx.body = {
      body: course
    };
  }
};

const lectureCreate = async (ctx) => {
  const {
    crId,
    title
  } = ctx.request.body;
  try {
    courseNew = await courseCrud.addLecture({
      params: {
        qr: {
          _id: crId
        }
      },
      body: {
        title
      }
    });
  } catch (e) {
    ctx.throw(422, {
      success: 0,
      message: e.message
    });
  } finally {
    ctx.body = {
      success: 1,
      data: {
        lecture: courseNew
      },
      message: 'Lecture created successfully'
    };
  }
};

const contentCreate = async (ctx) => {
  const {
    title,
    fileId,
    ctType,
    order,
    lectureId
  } = ctx.request.body;
  try {
    courseNew = await courseCrud.addContent({
      params: {
        qr: {
          _id: lectureId
        }
      },
      body: {
        title,
        file: fileId,
        ctType,
        order
      }
    });
  } catch (e) {
    ctx.throw(422, {
      success: 0,
      message: e.message
    });
  } finally {
    ctx.body = {
      success: 1,
      data: {
        content: courseNew
      },
      message: 'Content created successfully'
    };
  }
};

const createTest = async (ctx) => {
  try {
    courseNew = await courseCrud.createTest(ctx.request.body);
  } catch (e) {
    ctx.throw(422, {
      success: 0,
      message: e.message
    });
  } finally {
    ctx.body = {
      success: 1,
      data: {
        test: courseNew
      },
      message: 'Test created successfully'
    };
  }
};

const enrollStudent = async (ctx) => {
  try {
    await courseCrud.enrollStudent({
      params: {
        qr: {
          _id: ctx.request.body.crId
        }
      },
      body: {
        uid: ctx.state.user.uid
      }
    });
  } catch (e) {
    ctx.throw(422, {
      success: 0,
      message: e.message
    });
  } finally {
    ctx.body = {
      success: 1,
      message: 'Student enrolled'
    };
  }
};

const enrollRemove = async (ctx) => {
  try {
    await courseCrud.removeEnroll({
      params: {
        qr: {
          _id: ctx.request.body.crId
        }
      },
      body: {
        uid: ctx.state.user.uid
      }
    });
  } catch (e) {
    ctx.throw(422, {
      success: 0,
      message: e.message
    });
  } finally {
    ctx.body = {
      success: 1,
      message: 'Course removed'
    };
  }
};

const getCourseTest = async (ctx) => {
  try {
    course = await testCrud.single({
      qr: {
        _id: ctx.params.id
      }
    });
  } catch (e) {
    ctx.throw(404, {
      success: 0,
      message: e.message
    });
  } finally {
    ctx.body = {
      success: 1,
      data: {
        test: course
      },
      message: 'Course found'
    };
  }
};

export {
  courseAll,
  courseSingle,
  courseCreate,
  courseUpdate,
  courseDelete,
  lectureCreate,
  contentCreate,
  createTest,
  enrollStudent,
  enrollRemove,
  getCourseTest
};
