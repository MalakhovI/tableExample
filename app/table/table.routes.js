'use strict';

angular
  .module('tableApp')
  .config(routes)

function routes($stateProvider) {
  'ngInject';
  $stateProvider
    .state('table', {
      url: '/table',
      templateUrl: 'table/table.html',
      controller: TableController,
      controllerAs: 'Table'
    });
}
