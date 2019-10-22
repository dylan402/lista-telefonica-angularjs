angular.module('appAccordion', []);

angular.module('appAccordion').run(function($templateCache) {
  $templateCache.put(
    'accordion.html',
    `
    <button class="accordion" ng-click="open()">{{ title }}</button>
    <div class="panel">
      <p ng-transclude ng-show="isOpened">{{ content }}</p>
    </div>
    `
  );
});

angular.module('appAccordion').directive('appAccordions', function() {
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

angular.module('appAccordion').directive('appAccordion', function() {
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
