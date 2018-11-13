function ModalForAcceptDelete($uibModalInstance, data) {
    var pc = this;
    pc.data = data;

    pc.closeModal = function () {

        // alert("You clicked the cancel button.");
        $uibModalInstance.dismiss('cancel');
    };
}
ModalForAcceptDelete.$inject = ['$uibModalInstance', 'data'];
export default (ngModule) => {
    ngModule.controller('ModalForAcceptDelete', ModalForAcceptDelete);
}