require('../views/contatos.html');
require('../views/detalhesContato.html');
require('../views/novo-contato.html');

routeConfig.$inject = ['$routeProvider'];

angular.module('ListaTelefonica').config(routeConfig);

function routeConfig($routeProvider) {
  $routeProvider
    .when('/contatos', {
      templateUrl: 'views/contatos.html',
      controller: 'ListaTelefonicaController',
      resolve: {
        contatos: [
          'ContatosService',
          function (ContatosService) {
            return ContatosService.carregarContatos();
          },
        ],
      },
    })
    .when('/contatos/:id', {
      templateUrl: 'views/detalhesContato.html',
      controller: 'DetalheContatoController',
      resolve: {
        contato: [
          'ContatosService',
          '$route',
          function (ContatosService, $route) {
            return ContatosService.carregarContato($route.current.params.id);
          },
        ],
      },
    })
    .when('/novo-contato', {
      templateUrl: 'views/novo-contato.html',
      controller: 'NovoContatoController',
      resolve: {
        operadoras: [
          'OperadorasService',
          function (OperadorasService) {
            return OperadorasService.carregarOperadoras();
          },
        ],
      },
    })
    .otherwise({ redirectTo: '/contatos' });
}
