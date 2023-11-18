test('test #1', () => {
  expect(1).toBe(1);
});

test('test #2', () => {
  expect(2).toBe(2);
});

test('test #3', () => {
  expect(4).toBe(3);
});

test('bad test #1', () => {
  expect(4).toBe(Number(1 + 3));
});