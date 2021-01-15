routeConfig.$inject = ['$routeProvider'];

angular.module('ListaTelefonica').config(routeConfig);

function routeConfig($routeProvider) {
  $routeProvider
    .when('/contatos', {
      templateUrl: 'views/contatos.html',
      controller: 'ListaTelefonicaController',
      resolve: {
        contatos: function (ContatosService) {
          return ContatosService.carregarContatos();
        },
      },
    })
    .when('/contatos/:id', {
      templateUrl: 'views/detalhesContato.html',
      controller: 'DetalheContatoController',
      resolve: {
        contato: function (ContatosService, $route) {
          return ContatosService.carregarContato($route.current.params.id);
        },
      },
    })
    .when('/novo-contato', {
      templateUrl: 'views/novo-contato.html',
      controller: 'NovoContatoController',
      resolve: {
        operadoras: function (OperadorasService) {
          return OperadorasService.carregarOperadoras();
        },
      },
    })
    .otherwise({ redirectTo: '/contatos' });
}
