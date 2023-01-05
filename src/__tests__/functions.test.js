import { mockCommentsCounter, mockItemCounter } from '../__mock__/functions.js';

describe.each([
  [[10, 15, 5, 2, 13, 14], 6],
  [[10, 5, 2, 13, 14], 5],
  [[10, 2, 13, 14], 4],
])('Counts the number of comments:', (a, b) => {
  test('Should count comments in an array', () => {
    expect(mockCommentsCounter(a)).toBe(b);
  });
});

describe.each([
  [[10, 13, 14], 3],
  [[10, 5, 2, 13, 14], 5],
  [[10, 2, 13, 14, 2, 13, 14], 7],
])('Counts the number of items displayed:', (a, b) => {
  test('Should count items in an array', () => {
    expect(mockItemCounter(a)).toBe(b);
  });
});
