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


test('should optimise logical-and concated min-width declarations', () => {
    let processedRuleParams = [
        // @media (min-width: 1024px)
        '(min-width: 1024px)',
        // @media screen and (min-width: 1024px) 
        'screen and (min-width: 1024px)',
        // @media (min-width: 480px) and (min-width: 768px)
        '(min-width: 768px)',
        // @media (min-width: 1480px) and (min-width: 768px)
        '(min-width: 1480px)',
        // @media screen and (min-width: 480px) and screen and (min-width: 768px)
        'screen and (min-width: 768px)',
        // @media (min-width: 480px) and (min-width: 768px), screen and (min-width: 1024px), screen and (min-width: 480px) and screen and (min-width: 768px)
        '(min-width: 768px), screen and (min-width: 1024px), screen and (min-width: 768px)'
    ]
    root.walkAtRules('media', rule => {
        processedRuleParams = processedRuleParams.filter(ruleParam => ruleParam !== rule.params);
    });
    expect(processedRuleParams).toStrictEqual([]);
});