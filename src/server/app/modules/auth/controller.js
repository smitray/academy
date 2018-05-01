import { compareSync } from 'bcryptjs';
import { generateJwt } from '@utl';
import userCrud from './user.service';


let auth;
let jwt;
let record;

const tokenGenerator = async (data) => {
  jwt = await generateJwt(data);

  await userCrud.put({
    params: {
      qr: {
        _id: data.uid
      }
    },
    body: {
      jwt
    }
  });
  return jwt;
};

/**
 * @api {post} /api/auth/local Local signup and login
 * @apiName Local auth
 * @apiGroup Authentication
 * @apiParam {String} username User's username
 * @apiParam {String} password User's password
 * @apiParam {String} email User's email
 * @apiParam {String} signup Use this as hidden field for signing up
 * @apiParamExample {json} Signup
 *    {
 *      "username": "smitray1",
 *      "password": "hello",
 *      "email": "so11eme@somew.com",
 *      "signup": true
 *    }
 * @apiParamExample {json} Login
 *    {
 *      "username": "smitray1", // Or email address but field name remains 'username'
 *      "password": "hello"
 *    }
 * @apiSuccess {Object[]} auth
 * @apiSuccess {String} auth.data.token JWT token
 * @apiSuccess {String} auth.message Success message
 * @apiSuccessExample {json} Success
 *    HTTP/1.1 200 OK
 *    {
 *      "data": {
 *        "token": "Bearer [JWT TOKEN]"
 *      },
 *      "message": "Loggedin successfully"
 *    }
 * @apiErrorExample {json} Server error
 *    HTTP/1.1 500 Internal Server Error
 * @apiErrorExample {json} Email or Username exists
 *    HTTP/1.1 409 Record conflict
 * @apiErrorExample {json} Wrong credentials
 *    HTTP/1.1 401 Not authorized
 * @apiErrorExample {json} Wrong form key
 *    HTTP/1.1 422 Unprocessable entity
 */

const authLocal = async (ctx) => {
  const {
    name,
    username,
    password,
    email,
    accType,
    signup
  } = ctx.request.body;
  auth = await userCrud.single({
    qr: {
      $or: [{
        username
      }, {
        email: username
      }]
    }
  });
  if (signup && !auth) {
    try {
      auth = await userCrud.create({
        name,
        username,
        password,
        email,
        acc_type: accType
      });
    } catch (e) {
      ctx.throw(422, {
        success: 0,
        message: e.message
      });
    }
  } else if (signup && auth) {
    ctx.throw(409, { success: 0, message: 'Email or username already registered!!' });
  } else if (!auth) {
    ctx.throw(401, { success: 0, message: 'No user found' });
  } else if (auth && !compareSync(password, auth.password)) {
    ctx.throw(401, { success: 0, message: 'Password given is wrong' });
  }
  const token = await tokenGenerator({
    uid: auth._id,
    acc_type: auth.acc_type
  });
  ctx.cookies.set('token', token);
  ctx.body = {
    success: 1,
    data: {
      token
    },
    message: 'Loggedin successfully'
  };
};

/**
 * @api {post} /api/auth/social Signup or login using facebook, google and twitter
 * @apiName Social auth
 * @apiGroup Authentication
 * @apiParam {String} username User's username from social network
 * @apiParam {String} email User's email
 * @apiParam {String} scId Social network's ID
 * @apiParam {String} scToken Social network's token
 * @apiParam {String} scType Social network type. E.g. facebook, twitter, google
 * @apiParamExample {json} Input
 *    {
 *      "username": "smitray1",
 *      "email": "so11eme@somew.com",
 *      "scId": "12345",
 *      "scToken": "12345",
 *      "scType": "facebook"
 *    }
 * @apiSuccess {Object[]} auth
 * @apiSuccess {String} auth.data.token JWT token
 * @apiSuccess {String} auth.message Success message
 * @apiSuccessExample {json} Success
 *    HTTP/1.1 200 OK
 *    {
 *      "data": {
 *        "token": "Bearer [JWT TOKEN]"
 *      },
 *      "message": "Loggedin successfully"
 *    }
 * @apiErrorExample {json} Server error
 *    HTTP/1.1 500 Internal Server Error
 * @apiErrorExample {json} Email or Username exists
 *    HTTP/1.1 409 Record conflict
 * @apiErrorExample {json} Wrong credentials
 *    HTTP/1.1 401 Not authorized
 * @apiErrorExample {json} Wrong form key
 *    HTTP/1.1 422 Unprocessable entity
 */

const authSocial = async (ctx) => {
  const {
    username,
    email,
    scId,
    scToken,
    scType
  } = ctx.request.body;

  const qr = {};
  qr.username = username;
  qr[`social.${scType}.id`] = scId;

  auth = await userCrud.single({
    qr
  });

  if (!auth) {
    try {
      auth = await userCrud.create({
        username,
        email,
        social: {
          [scType]: {
            id: scId,
            token: scToken
          }
        }
      });
    } catch (e) {
      ctx.throw(422, {
        success: 0,
        message: e.message
      });
    }
  }

  const token = await tokenGenerator({
    uid: auth._id,
    acc_type: auth.acc_type
  });
  // ctx.session.token = token;
  ctx.body = {
    success: 1,
    data: {
      token
    },
    message: 'Loggedin successfully'
  };
};

const getMe = async (ctx) => {
  try {
    record = await userCrud.single({
      qr: {
        _id: ctx.state.user.uid
      },
      select: 'username email name acc_type'
    });
  } catch (e) {
    ctx.throw(404, e.message);
  } finally {
    ctx.body = {
      success: 1,
      data: {
        user: record
      },
      message: 'User found'
    };
  }
};
const getMyCourseAuthor = async (ctx) => {
  try {
    record = await userCrud.single({
      qr: {
        _id: ctx.state.user.uid
      },
      select: 'authorCourse',
      populate: [{
        path: 'authorCourse',
        model: 'courseModel'
      }]
    });
  } catch (e) {
    ctx.throw(404, e.message);
  } finally {
    ctx.body = {
      success: 1,
      data: {
        course: record
      },
      message: 'Author courses'
    };
  }
};

const getMyCourseStudent = async (ctx) => {
  try {
    record = await userCrud.single({
      qr: {
        _id: ctx.state.user.uid
      },
      select: 'authorCourse',
      populate: [{
        path: 'studentCourse',
        model: 'courseModel'
      }]
    });
  } catch (e) {
    ctx.throw(404, e.message);
  } finally {
    ctx.body = {
      success: 1,
      data: {
        course: record
      },
      message: 'Student courses'
    };
  }
};

const getOther = async (ctx) => {
  try {
    record = await userCrud.single({
      qr: {
        _id: ctx.params.id
      },
      select: 'username email name acc_type course',
      populate: [{
        path: 'course',
        model: 'courseModel',
        select: 'title category created_at'
      }]
    });
  } catch (e) {
    ctx.throw(404, e.message);
  } finally {
    ctx.body = {
      success: 1,
      data: {
        user: record
      },
      message: 'User found'
    };
  }
};

const updateMe = async (ctx) => {
  try {
    record = await userCrud.put({
      params: {
        qr: {
          _id: ctx.state.user.uid
        }
      },
      body: ctx.request.body
    });
  } catch (e) {
    ctx.throw(422, e.message);
  } finally {
    ctx.body = {
      success: 1,
      data: {
        user: record
      },
      message: 'User updated'
    };
  }
};

const deleteMe = async (ctx) => {
  try {
    record = await userCrud.delete({
      params: {
        qr: {
          _id: ctx.state.user.uid
        }
      }
    });
  } catch (e) {
    ctx.throw(404, e.message);
  } finally {
    ctx.body = {
      success: 1,
      data: {
        user: record
      },
      message: 'User deleted'
    };
  }
};

const logMeOut = async (ctx) => {
  ctx.cookies.set('token', '');
  ctx.body = {
    success: 1,
    message: 'User logged out'
  };
};

export {
  authLocal,
  authSocial,
  getMe,
  getOther,
  updateMe,
  deleteMe,
  logMeOut,
  getMyCourseAuthor,
  getMyCourseStudent
};
