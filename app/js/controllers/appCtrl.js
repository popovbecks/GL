
function AppCtrl($scope, $state) {
  let appCtrl = this;

  appCtrl.option = {
    name: 'GL-Bench-Test',
    settings: {
      headerFixed: false,
      container: false
    }
  };
};

AppCtrl.$inject = ['$scope','$state'];

export default (ngModule) => {
  ngModule.controller('AppCtrl', AppCtrl);
}
