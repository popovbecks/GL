function ModalInstanceCtrl($uibModalInstance, data) {
    var pc = this;
    pc.data = data;
    pc.change = function () {
        pc.uniq = pc.data.filter(item => item === pc.user.email);
        console.log(pc.uniq);
    }
    pc.ok = function (item) {
        //{...}
        // alert("You clicked the ok button.");
        $uibModalInstance.close(item);
    };

    pc.cancel = function () {
        //{...}
        // alert("You clicked the cancel button.");
        $uibModalInstance.dismiss('cancel');
    };
}

ModalInstanceCtrl.$inject = ['$uibModalInstance', 'data'];

export default (ngModule) => {
    ngModule.controller('ModalInstanceCtrl', ModalInstanceCtrl);
}