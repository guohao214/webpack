// import Button from './src/button';
// const button  = new Button('google.com');
// button.render('a');

if (document.querySelectorAll('a').length) {
    require.ensure([], () => {
        const Button = require('./src/button').default;
        const button = new Button('google.com');

        button.render('a');
    });
}
