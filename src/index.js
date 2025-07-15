const express = require('express');
const bodyParser = require('body-parser');


const {PORT} = require('./config/server.config');
const apiRouter = require('./routes');

const app = express();

//initial setup
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());

//Ping check
app.get('/ping',(req,res)=>{
    return  res.json({message: 'Problem Service is Active'});
})

app.use('/api',apiRouter);

app.listen(PORT, () => {
    console.log(`Server started on port`, PORT);
});