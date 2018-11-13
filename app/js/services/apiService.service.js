function apiService($http) {
    this.getAccounts = function () {
        return $http.get(' http://localhost:3000/employees');
    }
    this.addAccount = function (data) {
        return $http.post('http://localhost:3000/employees/', data);
    }
    this.changeAccount = function (id, data) {
        return $http.put(`http://localhost:3000/employees/${id}`, data)
    }
}
apiService.$inject = ['$http'];
export default (ngModule) => {
    ngModule.service('apiService', apiService);
}