import Queue from '../src/Queue/Queue';

test('Testing Queue not empty', () => {
  const Q = new Queue<number>();
  expect(Q.isEmpty()).toBe(true);
  Q.push(1);
  expect(Q.isEmpty()).toBe(false);
});

test('Testing front functionality', () => {
  const Q = new Queue<number>();
  Q.push(1);
  expect(Q.front()).toBe(1);
});

test('Testing pop & push functionality', () => {
  const Q = new Queue<number>();
  Q.push(1);
  Q.push(2);
  Q.push(3);
  Q.push(4);
  expect(Q.front()).toBe(1);
  Q.pop();
  expect(Q.front()).toBe(2);
  Q.pop();
  expect(Q.front()).toBe(3);
  Q.pop();
  expect(Q.front()).toBe(4);
  Q.pop();
  expect(Q.front()).toBe(undefined);
});
