const contatosHtml = require('../views/contatos.html');
const detalhesContatosHtml = require('../views/detalhesContato.html');
const novosContatosHtml = require('../views/novo-contato.html');

routeConfig.$inject = ['$routeProvider'];

angular.module('ListaTelefonica').config(routeConfig);

function routeConfig($routeProvider) {
  $routeProvider
    .when('/contatos', {
      templateUrl: contatosHtml,
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
      templateUrl: detalhesContatosHtml,
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
      templateUrl: novosContatosHtml,
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
