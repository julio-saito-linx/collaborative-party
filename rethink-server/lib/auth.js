const bcrypt = require('bcrypt');
const token = require('./token');
const Promise = require('bluebird');

module.exports.authorize = (request, response, next) => {
  const apiToken = request.headers['x-api-token'];
  token.verify(apiToken, next);
  next();
};

module.exports.hash_password = (password) => {
  return new Promise((resolve, reject) => {
    bcrypt.genSalt(10, (error, salt) => {
      if (error) return reject(error);

      bcrypt.hash(password, salt, (err, hash) => {
        if (err) return reject(err);
        return resolve(hash);
      });
    });
  });
};

module.exports.authenticate = (password, hash) => {
  return new Promise((resolve, reject) => {
    bcrypt.compare(password, hash, (error, response) => {
      if (error) return reject(error);
      return resolve(response);
    });
  });
};
