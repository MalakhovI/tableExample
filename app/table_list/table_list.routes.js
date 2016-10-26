'use strict';

angular
  .module('tableApp')
  .config(routes)

function routes($stateProvider) {
  'ngInject';
  $stateProvider
    .state('tableList', {
      url: '/tableList',
      templateUrl: 'table_list/table_list.html',
      controller: TableListController,
      controllerAs: 'TableList'
    });
}
