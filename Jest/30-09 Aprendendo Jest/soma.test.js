const somar = require('./soma');

test('soma 1 + 2 para resultar em 3', () => {
  expect(somar(1, 2)).toBe(3);
});