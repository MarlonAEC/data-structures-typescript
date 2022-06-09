import Stack from '../../src/Stack';

test('Testing Stack creation', () => {
  const stack = new Stack();
  expect(stack).toBeDefined();
});

test('Testing Stack pop', () => {
  const stack = new Stack();
  stack.push(1);
  expect(stack.top()).toBe(1);
  stack.push(2);
  expect(stack.top()).toBe(2);
  stack.push(3);
  expect(stack.top()).toBe(3);
  stack.push(4);
  expect(stack.top()).toBe(4);
  stack.pop();
  expect(stack.top()).toBe(3);
  stack.pop();
  expect(stack.top()).toBe(2);
  stack.pop();
  expect(stack.top()).toBe(1);
  stack.pop();
  expect(stack.top()).toBe(undefined);
});

test('Testing stack isEmpty', () => {
  const stack = new Stack();
  expect(stack.isEmpty()).toBe(true);
  stack.push(1);
  expect(stack.isEmpty()).toBe(false);
});

test('Testing swap functionality', () => {
  const stack1 = new Stack();
  const stack2 = new Stack();
  stack1.push(1);
  stack1.push(2);
  stack1.push(3);
  stack1.push(4);
  stack2.push(5);
  stack2.push(6);
  stack2.push(7);
  stack2.push(8);
  expect(stack1.top()).toBe(4);
  expect(stack2.top()).toBe(8);
  stack1.swap(stack2);
  expect(stack1.top()).toBe(8);
  expect(stack2.top()).toBe(4);
});

test('Testing size of the stack', () => {
  const stack = new Stack();
  expect(stack.size()).toBe(0);
  stack.push(1);
  expect(stack.size()).toBe(1);
  stack.push(2);
  expect(stack.size()).toBe(2);
  stack.push(3);
  expect(stack.size()).toBe(3);
  stack.pop();
  expect(stack.size()).toBe(2);
  stack.pop();
  expect(stack.size()).toBe(1);
  stack.pop();
  expect(stack.size()).toBe(0);
});
