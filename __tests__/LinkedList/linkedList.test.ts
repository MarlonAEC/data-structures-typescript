import LinkedList from '../../src/LinkedList';

test('Testing append method', () => {
  const list = new LinkedList<number>();
  list.append(12);
  list.append(28);
  list.append(30);
  expect(list.peekAt(1)).toBe(28);
});

test('Testing pop_front method', () => {
  const list = new LinkedList<number>();
  list.append(12);
  expect(list.peek_front()).toBe(12);
  list.append(28);
  expect(list.peek_front()).toBe(12);
  expect(list.peek_back()).toBe(28);
  list.append(30);
  expect(list.peek_front()).toBe(12);
  list.pop_front();
  expect(list.peekAt(0)).toBe(28);
  expect(list.size()).toBe(2);
});

test('Testing pop_back method', () => {
  const list = new LinkedList<number>();
  list.append(12);
  expect(list.peek_front()).toBe(12);
  list.append(28);
  expect(list.peek_front()).toBe(12);
  expect(list.peek_back()).toBe(28);
  list.append(30);
  expect(list.peek_front()).toBe(12);
  list.pop_back();
  expect(list.peekAt(1)).toBe(28);
  expect(list.size()).toBe(2);
});

test('Testing removeElementAt method', () => {
  const list = new LinkedList<number>();
  list.append(12);
  list.append(28);
  list.append(30);
  expect(list.peekAt(1)).toBe(28);
  list.removeElementAt(1);
  expect(list.peekAt(1)).toBe(30);
});

test('Testing prepend method', () => {
  const list = new LinkedList<number>();
  list.append(12);
  list.append(28);
  list.append(30);
  expect(list.peekAt(1)).toBe(28);
  list.prepend(10);
  expect(list.peekAt(0)).toBe(10);
});

test('Testing insertAt method', () => {
  const list = new LinkedList<number>();
  list.append(12);
  list.append(28);
  list.append(30);
  expect(list.peekAt(1)).toBe(28);
  list.insertAt(1, 15);
  expect(list.peekAt(1)).toBe(15);
});

test('Testing display function', () => {
  const list = new LinkedList<number>();
  list.append(12);
  list.append(28);
  list.append(30);
  const arrayValues: number[] = [];
  const display: (value: number) => void = (value) => {
    arrayValues.push(value);
  };
  list.displayNodes(display);
  expect(arrayValues).toEqual([12, 28, 30]);
});
