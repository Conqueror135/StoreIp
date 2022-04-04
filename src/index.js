const express = require('express');
const app = express();
const router = require('./routes/router');
const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));
app.use('/api/v1', router);
app.get('/', (req, res)=>{
    res.json("Welcom to store ip!");
});
app.listen(process.env.PORT, ()=>{
});