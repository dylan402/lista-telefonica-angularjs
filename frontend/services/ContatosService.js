contatosService.$inject = ['$http', 'config'];

angular.module('ListaTelefonica').factory('ContatosService', contatosService);

function contatosService($http, config) {
  const carregarContatos = () => {
    return $http.get(`${config.baseUrl}:${config.port}/contatos`);
  };

  const carregarContato = (CodContato) => {
    return $http.get(`${config.baseUrl}:${config.port}/contatos/${CodContato}`);
  };

  const adicionarContato = (contato) => {
    return $http.post(`${config.baseUrl}:${config.port}/contatos`, contato);
  };

  return {
    carregarContatos,
    carregarContato,
    adicionarContato,
  };
}
