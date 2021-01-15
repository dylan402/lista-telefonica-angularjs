ellipsisFilter.$inject = [];

angular.module('ListaTelefonica').filter('ellipsis', ellipsisFilter);

function ellipsisFilter() {
  return function (input, size) {
    if (input.length < size) return input;
    const output = input.substring(0, size) + '...';
    return output;
  };
}
