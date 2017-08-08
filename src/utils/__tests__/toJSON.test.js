const toJSON = require('../toJSON');

it('should return correct JSON ', () => {
  expect(
    toJSON({ data: '])}while(1);</x>{"success":true}' }),
  ).toMatchSnapshot();
});
