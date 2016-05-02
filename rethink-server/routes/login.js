const express = require('express');
const rdb = require('../lib/rethink');
const auth = require('../lib/auth');
const token = require('../lib/token');
const router = express.Router();

router.post('/', (request, response, next) => {
  rdb.findBy('users', 'email', request.body.email)
  .then((user) => {
    const firstUser = user[0];

    if (!firstUser) {
      const userNotFoundError = new Error('User not found');
      userNotFoundError.status = 404;
      return next(userNotFoundError);
    }

    auth.authenticate(request.body.password, firstUser.password)
    .then((authenticated) => {
      if (authenticated) {
        const currentUser = {
          name: firstUser.name,
          email: firstUser.email,
          token: token.generate(firstUser)
        };

        response.json(currentUser);
      } else {
        const authenticationFailedError = new Error('Authentication failed');
        authenticationFailedError.status = 401;
        return next(authenticationFailedError);
      }
    });
  });
});

module.exports = router;
