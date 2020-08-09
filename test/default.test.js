const postcss = require('postcss');
const plugin = require('../index');
const data = require('./default.data');

let root;

beforeAll(() => {
    root = postcss([plugin()]).process(data).root;
});

test('should validate workflow', () => {
    expect(true).toBe(true);
});