const postcss = require('postcss');

module.exports = postcss.plugin('postcss-optimise-media-query-logic', opts => {
    return root => {
        root.walkAtRules('media', atRule => {
            atRule.params = atRule.params.replace(/(?=, )*(\w*( and )*\(min-width: \d+[A-z|%]{1,3}\)( and )*){2,}/g, sourceMatch => {
                let fragments = [...new Set(sourceMatch.split(' and '))];
                const digits = fragments.map(fragment => parseInt(fragment.match(/\d+/g))).filter(parsedFragment => parsedFragment);
                const bigo = Math.max(...digits);
                fragments = fragments.filter(fragment => !fragment.startsWith('(min-width') || fragment.includes(bigo));
                return fragments.join(' and ');
            });
        });
    };
});