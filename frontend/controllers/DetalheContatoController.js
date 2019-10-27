angular.module('ListaTelefonica').controller('DetalheContatoController', function($scope, $routeParams, contato) {
  $scope.contato = contato.data;
});
