function ModalForAcceptDelete($uibModalInstance, data) {
    var pc = this;
    pc.data = data.data;
    pc.flag = data.flag;

    pc.closeModal = function () {

        // alert("You clicked the cancel button.");
        $uibModalInstance.dismiss('cancel');
    };
}
ModalForAcceptDelete.$inject = ['$uibModalInstance', 'data'];
export default (ngModule) => {
    ngModule.controller('ModalForAcceptDelete', ModalForAcceptDelete);
}