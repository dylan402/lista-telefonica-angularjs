angular.module('ListaTelefonica').controller('ListaTelefonicaController', function($scope, $http) {
    $scope.app = 'Lista Telefônica';
    $scope.contatos = [];
    $scope.operadoras = [];

    const carregarContatos = () => {
        $http.get('http://localhost:3333/contatos').then(response => {
            $scope.contatos = response.data;
        });
    };

    const carregarOperadoras = () => {
        $http.get('http://localhost:3333/operadoras').then(response => {
            $scope.operadoras = response.data;
        });
    };

    $scope.adicionarContato = contato => {
        $http.post('http://localhost:3333/contatos', contato).then(response => {
            console.log(response);
            delete $scope.contato;
            $scope.contatoForm.$setPristine();
            carregarContatos();
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
