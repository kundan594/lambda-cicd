const handler = require('../handler');

test('correctly init users', () => {
  expect(handler.initUser({foo: 'bar'})).toStrictEqual({
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Hello From Init User',
        input: {foo: 'bar'},
      },
      null,
      2
    ),
  });
});