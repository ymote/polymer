
var hyperstream = require('hyperstream');
var fs = require('fs');

var hs = hyperstream({
    '#console-box': process.stdin
});


var ws = fs.createWriteStream(__dirname + '/index.html');
var rs = fs.createReadStream(__dirname + '/index.tmpl');

ws.on('finish', function () {
  console.log('file has been written');
});

ws.on('error', function (err) {
    console.log(err);
  });

//rs.pipe(hs).pipe(process.stdout);
rs.pipe(hs).pipe(ws);

