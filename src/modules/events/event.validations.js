import BaseJoi from 'joi';
import Extension from 'joi-date-extensions';

const Joi = BaseJoi.extend(Extension);

export default {
  createEvent: {
    body: {
      title: BaseJoi.string().min(5).max(50).required(),
      description: BaseJoi.string().min(10).max(200),
      startDate: Joi.date().format('YYYY-MM-DD'),
      endDate: Joi.date().format('YYYY-MM-DD'),
    },
  },
  updateEvent: {
    body: {
      title: BaseJoi.string().min(5).max(50),
      description: BaseJoi.string().min(10).max(200),
      startDate: Joi.date().format('YYYY-MM-DD'),
      endDate: Joi.date().format('YYYY-MM-DD'),
    },
  },
};
