TableListController.$inject = ['$http'];

function TableListController($http) {
  var vm=this;
  vm.tablesName=[];

  $http.get('/tablesList')
    .then(function(resp) {
      vm.tablesName = resp.data;
    })
    .catch(function(err) {
      console.log("Error receiving data: ", err)
    })
}
