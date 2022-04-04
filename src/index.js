const express = require('express');
const app = express();
const router = require('./routes/router');
const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));
app.use('/api/v1', router);
app.listen(process.env.PORT, ()=>{
});