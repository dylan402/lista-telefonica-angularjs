detalheContatoController.$inject = ['$scope', 'contato'];

angular.module('ListaTelefonica').controller('DetalheContatoController', detalheContatoController);

function detalheContatoController($scope, contato) {
  $scope.contato = contato.data;
}
