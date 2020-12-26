const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const extractData = require('./extractData');

app.use('/public', express.static(path.join(__dirname, 'static')));
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, 'static', 'index.html'));
});

app.post('/', (req, res)=>{
    extractData.makeHTMLForm(req.body);
    res.send('Your order has been completed!');
});

app.listen(3000);
