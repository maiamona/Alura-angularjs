angular.module('alurapic').controller('fotosController', function ($scope, $http) {
     $scope.fotos = [];
     $scope.filtro = '';
     $scope.mensagem= '';

      $http.get('v1/fotos')
     .success(function (retorno) {
         console.log(retorno)
         $scope.fotos = retorno;// não precisa fazer retorno.data
     })
     .error(function (erro) {
         console.log(erro);
     });

    // var promise = $http.get('v1/fotos ');
    // promise.then(function (retorno) {
    //     $scope.fotos = retorno.data;
    // }).catch(function (error) {
    //     console.log(error);
    // });

    $scope.remover = function (foto) {
        //remove a foto
        $http.delete('v1/fotos/' + foto._id)
        .success(function () {
         var indiceFoto = $scope.fotos.indexOf(foto);
         $scope.fotos.splice(indiceFoto, 1);
         $scope.mensagem='Foto ' + foto.titulo + ' foi removida com sucesso';
        })
        .error(function(erro){
console.log(erro);
$scope.mensagem='Não foi possivel remover a foto ' + foto.titulo;
        })
    }

  
});