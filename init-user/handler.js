'use strict';

module.exports.initUser = event => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Hello From Init User',
        input: event,
      },
      null,
      2
    ),
  };
};
