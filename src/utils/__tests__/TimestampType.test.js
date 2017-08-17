const TimestampType = require('../TimestampType');

it('should return TimestampType', () => {
  expect(TimestampType).toMatchSnapshot();
});

it('should support parseValue', () => {
  expect(TimestampType.parseValue(1502421324185)).toBe(1502421324185);
});

it('should support serialize', () => {
  expect(TimestampType.serialize(1502421324185)).toBe(1502421324185);
});
