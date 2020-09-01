module.exports = `
    .foo {
        color: red;
    }
    @media (min-width: 1024px) {
        .foo {
            color: green;
        }
    }
    @media screen and (min-width: 1024px) {
        .bar {
            content: 'similar but different query'
        }
    }
    @media (min-width: 480px) and (min-width: 768px) {
        body {
          background-color: #000;
          color: #fff;
        }
    }
    @media (min-width: 1480px) and (min-width: 768px) {
        body {
          background-color: #000;
          color: #fff;
        }
    }
    @media screen and (min-width: 480px) and screen and (min-width: 768px) {
        body {
          background-color: #000;
          color: #fff;
        }
    }
    @media (min-width: 480px) and (min-width: 768px), screen and (min-width: 1024px), screen and (min-width: 480px) and screen and (min-width: 768px) {
        body {
          background-color: #000;
          color: #fff;
        }
    }
`;