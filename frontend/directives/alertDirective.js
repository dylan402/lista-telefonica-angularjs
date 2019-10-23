angular.module('ListaTelefonica').directive('appAlert', function() {
  return {
    templateUrl: '/views/alert.html',
    replace: true,
    restrict: 'E',
    scope: {
      title: '@',
      message: '=',
    },
    transclude: true,
  };
});
