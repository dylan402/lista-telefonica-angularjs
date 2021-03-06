nameFilter.$inject = [];

angular.module('ListaTelefonica').filter('name', nameFilter);

function nameFilter() {
  return function (input) {
    const nomes = input.split(' ');

    const nomesFormatados = nomes
      .map((nome) => {
        if (/(da|de)/.test(nome)) return nome;
        return nome.charAt(0).toUpperCase() + nome.substring(1).toLowerCase();
      })
      .join(' ');

    return nomesFormatados;
  };
}
