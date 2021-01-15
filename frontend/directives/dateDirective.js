dateDirective.$inject = [];

angular.module('ListaTelefonica').directive('appDate', dateDirective);

function dateDirective() {
  return {
    require: 'ngModel',
    link: function (scope, element, attrs, ctrl) {
      var _formatDate = function (date) {
        return date
          .replace(/[^0-9]+/g, '')
          .replace(/(\d{2})(\d)/, '$1/$2')
          .replace(/(\d{2})(\d)/, '$1/$2')
          .replace(/(\d{4})\d+?$/, '$1');
      };

      element.bind('keyup', function () {
        ctrl.$setViewValue(_formatDate(ctrl.$viewValue));
        ctrl.$render();
      });
    },
  };
}
