operadorasService.$inject = ['$http', 'config'];

angular.module('ListaTelefonica').service('OperadorasService', operadorasService);

function operadorasService($http, config) {
  this.carregarOperadoras = () => {
    return $http.get(`${config.baseUrl}:${config.port}/operadoras`);
  };
}
