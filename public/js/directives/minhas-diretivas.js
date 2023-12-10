angular.module('minhasDiretivas', [])
.directive('meuPainel', function () {
    var ddo = {};
ddo.restric = 'AE';//é usado como atributo <<A>> e elemento <<E>>
ddo.scope = {
    titulo : '@'
};
ddo.transclude = true;

ddo.templateUrl = 'js/directives/meu-painel.html';
    return ddo;
})
.directive('minhaFoto', function() {

    var ddo = {};

    ddo.restrict = "AE";//é usado como atributo <<A>> e elemento <<E>>

    ddo.scope = {
        titulo: '@',
        url: '@'
    };

    ddo.template = '<img class="img-responsive center-block" src="{{url}}" alt="{{titulo}}">';           
    
    return ddo;
})
.directive('meuBotaoPerigo', function () {
    var ddo = {};

    ddo.restrict = "E";//só pode ser usado como elemento <<E>>
    ddo.scope = {
        nome: '@',//copia de valores, sempre caracter
        acao: '&'// copia de valores, sempre espressão ou função
    };

    ddo.template = '<button ng-click="acao(foto)" class="btn btn-danger btn-block">{{nome}}</button>'; 
    return ddo;

});