/* eslint-disable no-unused-expressions */

import { expect } from 'chai';
import sinon from 'sinon';
import User from '../modules/users/user.model';

describe('User model', () => {
  it('should create new user', (done) => {
    const UserMock = sinon.mock(new User({ email: 'dani123@gmail.com',
      password: 'HelloWorld123',
      firstName: 'Dania',
      lastName: 'Refaie',
      userName: 'Dani' }));
    const user = UserMock.object;

    UserMock
      .expects('save')
      .yields(null);
    user.save((err) => {
      UserMock.verify();
      UserMock.restore();
      expect(err).to.be.null;
      done();
    });
  });
});
