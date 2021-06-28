const { getUser } = require('./promise');
it('should contain email', () => {
  expect.assertions(1);
  return getUser().then((data) => expect(data.email).toBe('Shanna@melissa.tv'));
});
