angular.module('ListaTelefonica').service('OperadorasService', function($http, config) {
  this.carregarOperadoras = () => {
    return $http.get(`${config.baseUrl}:${config.port}/operadoras`);
  };
});
