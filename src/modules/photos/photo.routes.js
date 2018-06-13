import { Router } from 'express';
import validate from 'express-validation';

import * as photoController from './photo.controllers';
import photoValidator from './photo.validations';
import { authJwt } from '../../services/jwt.services';
import { mult } from '../../services/multer.services';

const routes = new Router();

routes.post('/', authJwt, mult, validate(photoValidator.addPhoto), photoController.addPhoto);
routes.get('/:id', authJwt, photoController.getPhotoById);
routes.get('/', authJwt, photoController.getPhotosList);
routes.patch('/:id', authJwt, mult, photoController.updatePhoto);
routes.delete('/:id', authJwt, photoController.deletePhoto);

export default routes;
