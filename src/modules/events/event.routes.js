import { Router } from 'express';
import validate from 'express-validation';

import * as eventController from './event.controllers';
import eventValidation from './event.validations';
import { authJwt } from '../../services/jwt.services';

const routes = new Router();

routes.post('/', authJwt, validate(eventValidation.createEvent), eventController.createEvent);

export default routes;
