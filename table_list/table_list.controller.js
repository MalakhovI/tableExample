'use strict';
TableListController.$inject = ['items'];

function TableListController(items) {
  var vm=this;
  vm.tablesName = [];
  vm.tablesName = items.data;
}
