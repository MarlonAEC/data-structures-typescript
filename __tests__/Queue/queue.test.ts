import Queue from '../../src/Queue';
import { TestObjectType } from '../../src/@types/utils';

test('Testing Queue not empty', () => {
  const Q = new Queue<number>();
  expect(Q.isEmpty()).toBe(true);
  Q.enqueue(1);
  expect(Q.isEmpty()).toBe(false);
});

test('Testing front functionality', () => {
  const Q = new Queue<number>();
  Q.enqueue(1);
  expect(Q.front()).toBe(1);
});

test('Testing pop & push functionality', () => {
  const Q = new Queue<number>();
  Q.enqueue(1);
  Q.enqueue(2);
  Q.enqueue(3);
  Q.enqueue(4);
  expect(Q.front()).toBe(1);
  Q.dequeue();
  expect(Q.front()).toBe(2);
  Q.dequeue();
  expect(Q.front()).toBe(3);
  Q.dequeue();
  expect(Q.front()).toBe(4);
  Q.dequeue();
  expect(Q.front()).toBe(undefined);
});

test('Testing Queue with abstract type', () => {
  const Q = new Queue<TestObjectType>();
  Q.enqueue({
    key1: 'value1',
    key2: 1,
    key3: true,
    key4: ['value1', 'value2'],
    key5: {
      key6: 'value1',
      key7: 1,
      key8: true,
    },
  });
  expect(Q.front()?.key1).toBe('value1');
  expect(Q.front()?.key2).toBe(1);
  expect(Q.front()?.key3).toBe(true);
  expect(Q.front()?.key4).toEqual(['value1', 'value2']);
  expect(Q.front()?.key5.key6).toBe('value1');
  expect(Q.front()?.key5.key7).toBe(1);
  expect(Q.front()?.key5.key8).toBe(true);
  Q.dequeue();
  expect(Q.front()).toBe(undefined);
});
