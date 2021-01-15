routeConfig.$inject = ['$routeProvider'];

angular.module('ListaTelefonica').config(routeConfig);

function routeConfig($routeProvider) {
  $routeProvider
    .when('/contatos', {
      template: require('../views/contatos.html'),
      controller: 'ListaTelefonicaController',
      resolve: {
        contatos: function (ContatosService) {
          return ContatosService.carregarContatos();
        },
      },
    })
    .when('/contatos/:id', {
      template: require('../views/detalhesContato.html'),
      controller: 'DetalheContatoController',
      resolve: {
        contato: function (ContatosService, $route) {
          return ContatosService.carregarContato($route.current.params.id);
        },
      },
    })
    .when('/novo-contato', {
      template: require('../views/novo-contato.html'),
      controller: 'NovoContatoController',
      resolve: {
        operadoras: function (OperadorasService) {
          return OperadorasService.carregarOperadoras();
        },
      },
    })
    .otherwise({ redirectTo: '/contatos' });
}
