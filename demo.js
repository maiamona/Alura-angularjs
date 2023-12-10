var fs = require('fs');

//create a file named mynewfile1.txt:
// appendFile cria(se não existir) e atualiza
fs.appendFile('mynewfile1.txt', ' This is my text.', function (err) {
  if (err) throw err;
  console.log('Updated!');
});