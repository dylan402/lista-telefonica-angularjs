angular
  .module('ListaTelefonica')
  .controller('ListaTelefonicaController', function(
    $scope,
    ContatosService,
    OperadorasService,
    SerialGeneratorService
  ) {
    $scope.app = 'Lista Telefônica';
    $scope.contatos = [];
    $scope.operadoras = [];

    const carregarContatos = () => {
      ContatosService.carregarContatos().then(response => {
        $scope.contatos = response.data;
      });
    };

    const carregarOperadoras = () => {
      OperadorasService.carregarOperadoras().then(response => {
        $scope.operadoras = response.data;
      });
    };

    $scope.adicionarContato = contato => {
      contato.serial = SerialGeneratorService.generate();
      ContatosService.adicionarContato(contato)
        .then(response => {
          delete $scope.contato;
          $scope.contatoForm.$setPristine();
          carregarContatos();
        })
        .catch(response => {
          alert(response.data.error);
        });
    };

    $scope.apagarContatos = contatos => {
      $scope.contatos = contatos.filter(contato => {
        if (!contato.selecionado) return contato;
      });
    };

    $scope.isContatoSelecionado = contatos => {
      return contatos.some(contato => {
        return contato.selecionado;
      });
    };

    $scope.ordenarPor = campo => {
      $scope.criterioDeOrdenacao = campo;
      $scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
    };

    carregarContatos();
    carregarOperadoras();
  });
