import { Router } from 'express';
import validate from 'express-validation';

import { authLocal } from '../../services/auth.services';
import { authTwitter, authTwitterCallback } from '../../services/twitter.services';
import * as userController from './user.controllers';
import userValidation from './user.validations';

const routes = new Router();

routes.post('/signup', validate(userValidation.signup), userController.signUp);
routes.post('/login', authLocal, userController.login);
routes.get('/login/twitter', authTwitter);
routes.get('/auth/twitter/callback', authTwitterCallback, userController.twitterSignup);

export default routes;
