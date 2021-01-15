serialGeneratorConfig.$inject = ['SerialGeneratorServiceProvider'];

angular.module('ListaTelefonica').config(serialGeneratorConfig);

function serialGeneratorConfig(SerialGeneratorServiceProvider) {
  SerialGeneratorServiceProvider.setLength(20);
}
