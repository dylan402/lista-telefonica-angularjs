angular.module('ListaTelefonica').directive('appAccordions', function() {
  return {
    controller: function() {
      const accordions = [];

      this.registerAccordion = function(accordion) {
        accordions.push(accordion);
      };

      this.closeAll = function() {
        accordions.forEach(accordion => (accordion.isOpened = false));
      };
    },
  };
});

angular.module('ListaTelefonica').directive('appAccordion', function() {
  return {
    templateUrl: 'accordion.html',
    transclude: true,
    require: '^appAccordions',
    scope: {
      title: '@',
      content: '=',
    },
    link: function(scope, element, attrs, ctrl) {
      ctrl.registerAccordion(scope);
      scope.open = function() {
        if (scope.isOpened) {
          ctrl.closeAll();
        } else {
          ctrl.closeAll();
          scope.isOpened = true;
        }
      };
    },
  };
});
