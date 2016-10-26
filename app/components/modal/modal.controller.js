/**
 * Created by svetlana on 25.10.16.
 */

// var app = angular.module('tableApp');

angular.module('tableApp').controller('ModalInstanceCtrl', function ($uibModalInstance, type) {
  var $ctrl = this;
  $ctrl.type = type;

  $ctrl.ok = function () {
    $uibModalInstance.close('Ok');
  };

  $ctrl.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
});
