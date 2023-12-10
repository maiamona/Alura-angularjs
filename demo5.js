var fs = require('fs');
//rename renomeia apenas o nome do ficheiro sem modificar o que nela esta incluido
//create a file named mynewfile1.txt:
fs.rename('mynewfile1.txt', 'bonito.txt', function (err) {
  if (err) throw err;
  console.log('Ficheiro modificado!');
});