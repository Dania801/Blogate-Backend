import Joi from 'joi';

export default {
  addPhoto: {
    body: {
      caption: Joi.string().min(5).max(200),
    },
    file: {
      photo: Joi.string().required(),
    },
  },
  updatePhoto: {
    body: {
      caption: Joi.string().min(5).max(200),
    },
    file: {
      photo: Joi.string(),
    },
  },
};
