const add = require('./logic');

test('1+2 = 3', () => {
    expect(add(1,2)).toBe(3);
});

test('2+3 = 5', () => {
    expect(add(2,3)).toBe(5);
});
