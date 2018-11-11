var modalTemplate = require('../../tpl/myModalContent.html');
import ModalInstanceCtrl from './ModalInstanceCtrl'
function AccountsCtrl ($uibModal, $log) {

    var pc = this;
    pc.data = "Lorem Name Test";
    pc.app = function () {
      alert ('yo');
    }
    pc.open = function (size) {
        var modalInstance = $uibModal.open({
            animation: true,
            template: modalTemplate,
            controller: 'ModalInstanceCtrl',
            controllerAs: 'pc',
            size: size,
            resolve: {
                data: function () {
                    return pc.data;
                }
            }
        });

        modalInstance.result.then(function () {
            alert("now I'll close the modal");
        });
    };
};

AccountsCtrl.$inject = [ '$uibModal', '$log' ];

export default (ngModule) => {
  ngModule.controller('AccountsCtrl', AccountsCtrl);
}
