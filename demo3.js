var fs = require('fs');

//create a file named mynewfile1.txt:
// appendFile cria(se não existir) e substitui
fs.writeFile('mynewfile3.txt', 'substitui!', function (err) {
  if (err) throw err;
  console.log('Replaced!');
});