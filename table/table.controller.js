'use strict';
TableController.$inject = ['Modal' , 'items'];
function TableController(Modal, items) {
  var vm=this;
  vm.data = items.data.table;
  vm.tableName = items.data.tableName;
  vm.openModal=function (type) {
    Modal.open(type);
  };
}
