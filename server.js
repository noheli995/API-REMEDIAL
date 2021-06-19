const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 40000;

app.use(bodyParser.json({ limit: '100mb' }));
app.use(cors());

app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'PUT,GET,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
})


app.post('/api/PostData', function (req, res) {

   
    let bodyOfTheRequest = req.body;


    let fullName = `Hi my name is ${bodyOfTheRequest.firstname} ${bodyOfTheRequest.lastname}`

    res.send({
        "status": "OK",
        "message": fullName
    }

    );


})


app.get('/api/GetData', function (req, res) {

    res.send({
        "status": "OK",
        "message": 'Greetings humans this is the api running'
    })

})


app.listen(port, function () {
    console.log(`API LISTENING AT THE PORT ${port} `);
})