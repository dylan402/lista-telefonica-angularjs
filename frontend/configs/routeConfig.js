angular.module('ListaTelefonica').config(function($routeProvider) {
  $routeProvider.when('/contatos', {
    templateUrl: 'views/contatos.html',
    controller: 'ListaTelefonicaController',
    resolve: {
      contatos: function(ContatosService) {
        return ContatosService.carregarContatos();
      },
    },
  });

  $routeProvider.when('/contatos/:id', {
    templateUrl: 'views/detalhesContato.html',
    controller: 'DetalheContatoController',
    resolve: {
      contato: function(ContatosService, $route) {
        return ContatosService.carregarContato($route.current.params.id);
      },
    },
  });

  $routeProvider.when('/novo-contato', {
    templateUrl: 'views/novo-contato.html',
    controller: 'NovoContatoController',
    resolve: {
      operadoras: function(OperadorasService) {
        return OperadorasService.carregarOperadoras();
      },
    },
  });

  $routeProvider.otherwise({ redirectTo: '/contatos' });
});
