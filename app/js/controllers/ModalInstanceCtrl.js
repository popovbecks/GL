
    function ModalInstanceCtrl ($uibModalInstance, data) {
        var pc = this;
        pc.data = data;

        pc.ok = function () {
            //{...}
            alert("You clicked the ok button.");
            $uibModalInstance.close();
        };

        pc.cancel = function () {
            //{...}
            alert("You clicked the cancel button.");
            $uibModalInstance.dismiss('cancel');
        };
    }

ModalInstanceCtrl.$inject = ['$uibModalInstance', 'data'];

export default (ngModule) => {
    ngModule.controller('ModalInstanceCtrl', ModalInstanceCtrl);
}