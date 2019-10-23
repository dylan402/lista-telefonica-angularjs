angular.module('ListaTelefonica').config(function($routeProvider) {
  $routeProvider.when('/contatos', {
    templateUrl: 'views/contatos.html',
    controller: 'ListaTelefonicaController',
  });

  $routeProvider.when('/novo-contato', {
    templateUrl: 'views/novo-contato.html',
    controller: 'ListaTelefonicaController',
  });
});
