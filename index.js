const postcss = require('postcss');

module.exports = postcss.plugin('postcss-optimise-media-query-logic', opts => {
    return root => {
        root.walkAtRules('media', atRule => console.log(atRule));
    };
});