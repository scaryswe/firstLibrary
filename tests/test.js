/* eslint-disable no-undef */
const {
    capitalize,
    allCaps,
    capitalizeWords,
    removeExtraSpaces,
    capitalizeHeadline,
    kebobCase,
    snakeCase,
    camelCase,
    shift,
    makeHashTag,
    isEmpty,
  // eslint-disable-next-line import/extensions
  } = require('../src/index.js');
  
  // Challenge 1
  test('capitalize', () => {
    expect(capitalize('hello')).toBe('Hello');
    expect(capitalize('')).toBe('');
    expect(capitalize('WORLD')).toBe('WORLD');
  });
  
  // Challenge 2
  test('allCaps', () => {
    expect(allCaps('hello')).toBe('HELLO');
    expect(allCaps('HELLO')).toBe('HELLO');
  });
  
  // Challenge 3
  test('capitalizeWords', () => {
    expect(capitalizeWords('hello world')).toBe('Hello World');
  });
  
  // Challenge 4
  test('removeExtraSpaces', () => {
    expect(removeExtraSpaces('  hello   world  ')).toBe('hello world');
  });
  
  // Stretch
  test('capitalizeHeadline', () => {
    expect(capitalizeHeadline('the hello world')).toBe('The Hello World');
  });
  
  // Challenge 5
  test('kebobCase', () => {
    expect(kebobCase('Hello World')).toBe('hello-world');
    expect(kebobCase('Hello! World?')).toBe('hello-world');
  });
  
  // Challenge 6
  test('snakeCase', () => {
    expect(snakeCase('Hello World')).toBe('hello_world');
  });
  
  // Challenge 7
  test('camelCase', () => {
    expect(camelCase('Hello World')).toBe('helloWorld');
  });
  
  // Challenge 8
  test('shift', () => {
    expect(shift('Hello World')).toBe('ello WorldH');
    expect(shift('Hello World', 5)).toBe(' WorldHello');
  });
  
  // Challenge 9
  test('makeHashTag', () => {
    expect(makeHashTag('Amazing bongo drums for sale')).toEqual([
      '#amazing',
      '#bongo',
      '#drums',
    ]);
  });
  
  // Challenge 10
  test('isEmpty', () => {
    expect(isEmpty(' ')).toBe(true);
    expect(isEmpty('a')).toBe(false);
  });