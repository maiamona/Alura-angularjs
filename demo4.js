var fs = require('fs');
//unlink elimina o ficheiro
//create a file named mynewfile1.txt:
fs.unlink('mynewfile2.txt', function (err) {
  if (err) throw err;
  console.log('File deleted!');
});