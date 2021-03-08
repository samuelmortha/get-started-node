var express = require("express");
var app = express();
var bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get('/welcome-api-123',(req,res)=>{
  console.log(`CONSOLE LOG @ ${new Date().toISOString()}`);
  console.info(`CONSOLE info @ ${new Date().toISOString()}`);
  console.error(`CONSOLE ERror @ ${new Date().toISOString()}`);
  res.send(`Welcome-api-123 @ ${new Date().toISOString()}`)
})

//serve static file (index.html, images, css)
app.use(express.static(__dirname + '/views'));

var port = process.env.PORT || 3000
app.listen(port, function() {
    console.log("To view your app, open this link in your browser: http://localhost:" + port);
});
