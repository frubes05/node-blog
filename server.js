const express = require('express');
const app = express();
const mustacheExpress = require('mustache-express');

const indexRoute = require('./router/index');

app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');

app.use('/', indexRoute);

app.listen(9000, (PORT = 9000) => {
    console.log(`Server started at port ${PORT}`);
})