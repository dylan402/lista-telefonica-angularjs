listaTelefonicaController.$inject = ['$scope', 'contatos'];

angular.module('ListaTelefonica').controller('ListaTelefonicaController', listaTelefonicaController);

function listaTelefonicaController($scope, contatos) {
  $scope.app = 'Lista Telefônica';
  $scope.contatos = contatos.data;

  $scope.apagarContatos = (contatos) => {
    $scope.contatos = contatos.filter((contato) => {
      if (!contato.selecionado) return contato;
    });
  };

  $scope.isContatoSelecionado = (contatos) => {
    if (!contatos || !contatos.length) return;

    return contatos.some((contato) => {
      return contato.selecionado;
    });
  };

  $scope.ordenarPor = (campo) => {
    $scope.criterioDeOrdenacao = campo;
    $scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
  };
}
