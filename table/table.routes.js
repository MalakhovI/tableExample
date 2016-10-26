'use strict';
// routes.$inject = ['$http'];
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
      controllerAs: 'Table',
      resolve: {
        items: function ($http) {
          return $http({
            method: 'GET',
            url: '/table'
          });
        }
      }
    });
}
