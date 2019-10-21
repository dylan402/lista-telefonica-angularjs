angular.module('ListaTelefonica').directive('alert', function() {
  return {
    templateUrl: 'alert.html',
    replace: true,
    restrict: 'E',
    scope: {
      title: '@',
      message: '=',
    },
    transclude: true,
  };
});
