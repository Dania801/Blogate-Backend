import { Router } from 'express';
import validate from 'express-validation';

import { authJwt } from '../../services/jwt.services';
import articleValidation from './article.validations';
import * as articleController from './article.controllers';

const routes = new Router();

routes.post('/', authJwt, validate(articleValidation.createArticle), articleController.createArticle);

export default routes;
