/* jshint esversion:6 */

const express = require('express');
const app = express();
const path = require('path');
var fs = require("fs");
app.use(express.static(__dirname + '/'));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

function getDirectories (srcpath) {
  return fs.readdirSync(srcpath)
    .filter(file => fs.lstatSync(path.join(srcpath, file)).isDirectory())
}

app.post('/getTracks', function(req, res){
  const tracks = fs.readdirSync('./audio/');
  const genres =  getDirectories("./audio/");
  const data = {tracks:tracks,genres:genres};

  res.send(data);
    
});
app.listen(3000, function () {
  console.log('app listening on port 3000!');
});
