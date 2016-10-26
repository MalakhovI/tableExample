'use strict';

ModalInstanceCtrl.$inject = ['$uibModalInstance','type'];

  function ModalInstanceCtrl ($uibModalInstance, type) {
  var $ctrl = this;
  $ctrl.type = type;

  $ctrl.ok = function () {
    $uibModalInstance.close('Ok');
  };

  $ctrl.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
};
