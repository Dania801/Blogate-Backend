import { Router } from 'express';
import validate from 'express-validation';

import { authJwt } from '../../services/jwt.services';
import articleValidation from './article.validations';
import * as articleController from './article.controllers';

const routes = new Router();

routes.post('/', authJwt, validate(articleValidation.createArticle), articleController.createArticle);
routes.get('/:id', authJwt, articleController.getArticleById);
routes.get('/', authJwt, articleController.getArticlesList);
routes.patch('/:id', authJwt, validate(articleValidation.updateArticle), articleController.updateArticle);
routes.delete('/:id', authJwt, articleController.deleteArticle);

export default routes;
