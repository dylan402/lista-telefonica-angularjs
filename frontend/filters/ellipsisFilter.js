angular.module('ListaTelefonica').filter('ellipsis', function() {
  return function(input, size) {
    if (input.length < size) return input;
    const output = input.substring(0, size) + '...';
    return output;
  };
});
