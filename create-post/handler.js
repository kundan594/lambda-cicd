'use strict';

module.exports.createPost = event => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Hello From Create Post!',
        input: event,
      },
      null,
      2
    ),
  };
};
