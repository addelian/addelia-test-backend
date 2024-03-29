const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const articleRouter = require('./routes/articleRouter');
const tourRouter = require('./routes/tourRouter');

const hostname = 'localhost';
const port = 3000;

const app = express();
app.use(morgan('dev'));
app.use(bodyParser.json());

app.use('/articles', articleRouter);
app.use('/tour', tourRouter);

app.use(express.static(__dirname + '/public'));

app.use((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end("<html><body><h1>This is the future home of Jake Genera's site</h1></body></html>");
});

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
})