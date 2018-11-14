function ModalForDelete($uibModalInstance, data) {
    var pc = this;
    pc.data = data.data;
    pc.accept = function () {
        $uibModalInstance.close(pc.data);
    };
    pc.decline = function () {

        // alert("You clicked the cancel button.");
        $uibModalInstance.dismiss('cancel');
    };
}
ModalForDelete.$inject = ['$uibModalInstance', 'data'];
export default (ngModule) => {
    ngModule.controller('ModalForDelete', ModalForDelete);
}