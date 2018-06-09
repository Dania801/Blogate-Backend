import { Router } from 'express';
import validate from 'express-validation';

import * as eventController from './event.controllers';
import eventValidation from './event.validations';
import { authJwt } from '../../services/jwt.services';

const routes = new Router();

routes.post('/', authJwt, validate(eventValidation.createEvent), eventController.createEvent);
routes.patch('/:id', authJwt, validate(eventValidation.updateEvent), eventController.updateEvent);
routes.get('/:id', authJwt, eventController.getEvent);
routes.get('/', authJwt, eventController.getEventsList);
routes.delete('/:id', authJwt, eventController.deleteEvent);

export default routes;
