alertDirective.$inject = [];

angular.module('ListaTelefonica').directive('appAlert', alertDirective);

function alertDirective() {
  return {
    templateUrl: 'views/alert.html',
    replace: true,
    restrict: 'E',
    scope: {
      title: '@',
      message: '=',
    },
    transclude: true,
  };
}
