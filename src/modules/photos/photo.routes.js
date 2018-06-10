import { Router } from 'express';
import validate from 'express-validation';

import * as photoController from './photo.controllers';
import photoValidator from './photo.validations';
import { authJwt } from '../../services/jwt.services';
import { mult } from '../../services/multer.services';

const routes = new Router();

routes.post('/', authJwt, mult, photoController.addPhoto);

export default routes;
