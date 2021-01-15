app.$inject = ['$locationProvider'];

angular.module('ListaTelefonica', ['ngRoute', 'ngMessages', 'serialGenerator', 'appAccordion'], app);

function app($locationProvider) {
  $locationProvider.html5Mode(true);
}

/* CSS */
require('./assets/css/style.css');
require('./assets/css/accordion.css');

/* CONFIGS */
require('./configs/config');
require('./configs/routeConfig');
require('./configs/SerialGeneratorConfig');

/* CONTROLLERS */
require('./controllers/DetalheContatoController');
require('./controllers/ListaTelefonicaController');
require('./controllers/NovoContatoController');

/* DIRECTIVES */
require('./directives/alertDirective');
require('./directives/dateDirective');

/* FILTERS */
require('./filters/ellipsisFilter');
require('./filters/nameFilter');

/* SERVICES */
require('./services/ContatosService');
require('./services/OperadorasService');
