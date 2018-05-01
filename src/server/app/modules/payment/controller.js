import { paymentCrud } from './payment.model';


let payments;
let payment;
let paymentNew;

const paymentAll = async (ctx) => {
  try {
    payments = await paymentCrud.get();
  } catch (e) {
    ctx.throw(404, e.message);
  } finally {
    ctx.body = {
      body: payments
    };
  }
};

const paymentSingle = async (ctx) => {
  try {
    payment = await paymentCrud.single({ _id: ctx.params.id });
  } catch (e) {
    ctx.throw(404, e.message);
  } finally {
    ctx.body = {
      body: payment
    };
  }
};

const paymentCreate = async (ctx) => {
  try {
    paymentNew = await paymentCrud.create(ctx.request.body);
  } catch (e) {
    ctx.throw(422, e.message);
  } finally {
    ctx.body = {
      body: paymentNew
    };
  }
};

const paymentUpdate = async (ctx) => {
  try {
    payment = await paymentCrud.put({
      params: {
        _id: ctx.params.id
      },
      body: ctx.request.body
    });
  } catch (e) {
    ctx.throw(422, e.message);
  } finally {
    ctx.body = {
      body: payment
    };
  }
};

const paymentDelete = async (ctx) => {
  try {
    payment = await paymentCrud.delete({ _id: ctx.params.id });
  } catch (e) {
    ctx.throw(404, e.message);
  } finally {
    ctx.body = {
      body: payment
    };
  }
};

export {
  paymentAll,
  paymentSingle,
  paymentCreate,
  paymentUpdate,
  paymentDelete
};
