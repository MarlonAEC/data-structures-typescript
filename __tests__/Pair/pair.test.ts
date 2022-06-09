import Pair from '../../src/Pair';

test('Testing Pair creation', () => {
  const pair = new Pair<number, string>(1, 'value1');
  expect(pair.first).toBe(1);
  expect(pair.second).toBe('value1');
});

test('Test pair comparison', () => {
  const pair1 = new Pair<number, string>(1, 'value1');
  const pair2 = new Pair<number, string>(1, 'value1');
  expect(pair1.isEqual(pair2)).toBe(true);
});
