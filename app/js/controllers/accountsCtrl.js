var addModalTemplate = require('../../tpl/createModal.html');
var resetModalTemplate = require('../../tpl/deleteModal.html');
var acceptDeleteModalTemplate = require('../../tpl/acceptDeleteModal.html');
//import ModalInstanceCtrl from './ModalInstanceCtrl'

function AccountsCtrl($uibModal, $log, apiService) {


    var pc = this;

    pc.$onInit = function () {
        pc.getEmployeesFromApi();
    }
    pc.disableAccount = function (account) {
        account.status = 'Disable';
        apiService.changeAccount(account.id, account);
    }
    pc.toggled = function (open) {
        $log.log('Dropdown is now: ', open);
    };

    pc.getEmployeesFromApi = function () {
        apiService.getAccounts().then(accounts => {
            return pc.employees = accounts.data;

        }).then(items => {
            pc.data = items.map(accounts => accounts.email);
            pc.accountsNames = items.map(accounts => accounts.creator);
        }).catch(error => console.log('Something was happend with error status ' + error.status));
    }
    pc.checkForAccountMatches = function (creator, accountName) {
        var result = pc.accountsNames.filter(item => item === creator);
        console.log(result)
        return result.length ? accountName + result.length : accountName;
    };
    pc.date = new Date();
    pc.addEmployeeToDb = function (emp) {
        return apiService.addAccount({
            name: emp.name,
            account_name: pc.checkForAccountMatches(emp.name + ' ' + emp.lastName, emp.accountName),
            email: emp.email,
            creator: emp.name + ' ' + emp.lastName,
            status: "Active",
            start_date: pc.date.getTime(),
            "expiration_date": "1526880054"
        })
    }
    pc.open = function (size) {
        var modalInstance = $uibModal.open({
            animation: true,
            template: addModalTemplate,
            controller: 'ModalInstanceCtrl',
            controllerAs: 'pc',
            size: size,
            resolve: {
                data: function () {
                    return pc.data;
                }
            }
        });

        modalInstance.result.then(function (item) {
            return pc.addEmployeeToDb(item);
        }).then(items => pc.getEmployeesFromApi())
    };
    pc.reset = function (size, account) {
        var modalForResetInstance = $uibModal.open({
            animation: true,
            template: resetModalTemplate,
            controller: 'ModalForDelete',
            controllerAs: 'pc',
            size: size,
            resolve: {
                data: function () {
                    return account;
                }
            }
        });

        modalForResetInstance.result.then(function (item) {
            pc.disableAccount(item);
            pc.acceptDelete('md', item);

        })
    };
    pc.acceptDelete = function (size, account) {
        var modalForAcceptDelete = $uibModal.open({
            animation: true,
            template: acceptDeleteModalTemplate,
            controller: 'ModalForAcceptDelete',
            controllerAs: 'pc',
            size: size,
            resolve: {
                data: function () {
                    return account;
                }
            }
        });

        modalForAcceptDelete.result.then(function (item) {
            pc.disableAccount(item);

        })
    };
};

AccountsCtrl.$inject = ['$uibModal', '$log', 'apiService'];

export default (ngModule) => {
    ngModule.controller('AccountsCtrl', AccountsCtrl);
}