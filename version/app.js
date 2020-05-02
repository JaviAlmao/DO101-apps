const express = require('express');
app = express();

var response;

app.get('/', function (req, res) {

    response = 'This is version 5 of the app.' + '\n';

    //send the response to the client
    res.send(response);

});

app.get('/test', function (req, res) {

  //send the response to the client
  res.send("This is a test version");

});


app.listen(8080, function () {
  console.log('Server listening on port 8080...');
});
