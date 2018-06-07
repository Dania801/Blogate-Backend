import Joi from 'joi';

export default {
  createArticle: {
    body: {
      title: Joi.string().required().min(5).max(50),
      text: Joi.string().required().min(15),
    },
  },
  updateArticle: {
    body: {
      title: Joi.string().min(5).max(50),
      text: Joi.string().min(15),
    },
  },
};
