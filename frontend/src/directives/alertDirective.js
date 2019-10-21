angular.module('ListaTelefonica').directive('appAlert', function() {
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
