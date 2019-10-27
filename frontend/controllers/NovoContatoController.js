angular
  .module('ListaTelefonica')
  .controller('NovoContatoController', function(
    $scope,
    $location,
    ContatosService,
    operadoras,
    SerialGeneratorService
  ) {
    $scope.operadoras = operadoras.data;

    $scope.adicionarContato = contato => {
      contato.serial = SerialGeneratorService.generate();
      ContatosService.adicionarContato(contato)
        .then(response => {
          delete $scope.contato;
          $scope.contatoForm.$setPristine();
          $location.path('/contatos');
        })
        .catch(response => {
          alert(response.data.error);
        });
    };
  });
