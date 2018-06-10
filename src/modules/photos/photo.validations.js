import Joi from 'joi';

export default {
  addPhoto: {
    body: {
      photo: Joi.string().required(),
      caption: Joi.string().min(5).max(200),
    },
  },
  updatePhoto: {
    body: {
      photo: Joi.string(),
      caption: Joi.string().min(5).max(200),
    },
  },
};
