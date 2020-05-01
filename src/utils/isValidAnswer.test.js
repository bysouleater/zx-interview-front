import isValidAnswer from './isValidAnswer';

test('isValidAnswer should return false when required and the answer is empty', () => {
  const result = isValidAnswer('', { required: true });
  expect(result).toBeFalsy();
});

test('isValidAnswer should return true when required and the answer is not empty', () => {
  const result = isValidAnswer('something', { required: true, type: 'text' });
  expect(result).toBeTruthy();
});

test('isValidAnswer should return false when type is number and the answer is not', () => {
  const result = isValidAnswer('something', { required: true, type: 'number' });
  expect(result).toBeFalsy();
});

test('isValidAnswer should return true when type is number and the answer is too', () => {
  const result = isValidAnswer('123', { required: true, type: 'number' });
  expect(result).toBeTruthy();
});

test('isValidAnswer should return false when type is date and the answer is not', () => {
  const result = isValidAnswer('something', { required: true, type: 'date' });
  expect(result).toBeFalsy();
});

test('isValidAnswer should return true when type is date and the answer is too', () => {
  const result = isValidAnswer('01/01/2000', { required: true, type: 'date' });
  expect(result).toBeTruthy();
});

test('isValidAnswer should return true when not required and no answer', () => {
  const result = isValidAnswer('', { required: false, type: 'date' });
  expect(result).toBeTruthy();
});
