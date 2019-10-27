angular.module('ListaTelefonica').factory('ContatosService', function($http, config) {
  const carregarContatos = () => {
    return $http.get(`${config.baseUrl}:${config.port}/contatos`);
  };

  const carregarContato = CodContato => {
    return $http.get(`${config.baseUrl}:${config.port}/contatos/${CodContato}`);
  };

  const adicionarContato = contato => {
    return $http.post(`${config.baseUrl}:${config.port}/contatos`, contato);
  };

  return {
    carregarContatos,
    carregarContato,
    adicionarContato,
  };
});
