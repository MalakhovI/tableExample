'use strict';

angular
  .module('tableApp')
  .service('Modal', Modal);
Modal.$inject = ['$uibModal'];
function Modal($uibModal) {
  return {
    open: function open(type) {
      $uibModal.open({
        templateUrl: 'components/modal/modal.html',
        controller: ModalInstanceCtrl,
        controllerAs: '$ctrl',
        ariaLabelledBy: 'modal-title',
        ariaDescribedBy: 'modal-body',
        animation: true,
        resolve: {
          type: function () {
            return type;
          }
        }
      }).result.then(type);
    }
  };
}


