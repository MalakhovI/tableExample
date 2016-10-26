TableListController.$inject = ['$http', 'Modal'];
function TableController($http, Modal) {
  var vm=this;
  vm.data={};
  vm.tableName='';
  vm.openModal=function (type) {
    Modal.open(type);
  };

  $http.get('/table')
    .then(function(resp) {
      vm.data = resp.data.table;
      vm.tableName = resp.data.tableName;
    })
    .catch(function(err) {
      console.log("Error receiving data: ", err)
    })
}
