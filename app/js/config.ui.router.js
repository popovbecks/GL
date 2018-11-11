export default (ngModule) => {
    ngModule
      .run(['$rootScope', '$state', '$stateParams',
        function($rootScope, $state, $stateParams) {
          $rootScope.$state = $state;
          $rootScope.$stateParams = $stateParams;

          //$rootScope.$on('$locationChangeSuccess', function (event, url, oldUrl, state, oldState) {
          //  console.log(event, url, oldUrl, state, oldState);
          //});
          //
          //$rootScope.$on('$stateChangeSuccess', function(evt, to, toParams, from, fromParams) {
          //    console.log(evt, to, toParams, from, fromParams);
          //});
        }
      ])
        .config(['$ocLazyLoadProvider', function ($ocLazyLoadProvider) {
            $ocLazyLoadProvider.config({
                debug: true
            });
        }])
        .config(['$locationProvider', function ($locationProvider) {
            $locationProvider.html5Mode({
                enabled: true,
                requireBase: false
            });
        }])
        .config(['$stateProvider', '$urlRouterProvider', '$httpProvider',
            function ($stateProvider, $urlRouterProvider, $httpProvider) {

                $httpProvider.defaults.withCredentials = true;
                $urlRouterProvider.when('', '/accounts');
                $urlRouterProvider.when('/', '/accounts');
                $urlRouterProvider.otherwise(function ($injector, $location) {
                     var state = $injector.get('$state');
                     state.go('app.error', {errorStatus: 404});
                     return $location.path();
                 });

                $stateProvider
                    .state('app', {
                        abstract: true,
                        template: require('../tpl/app.html'),
                        controller: 'AppCtrl as appCtrl'
                    })
                    .state('app.accounts', {
                      url: '/accounts',
                      template: require('../tpl/accounts.html'),
                      controller: 'AccountsCtrl as acounts'
                    })
                    // .state('app.modal', {
                    //     url: '/modal',
                    //     template: require('../tpl/myModalContent.html'),
                    //     controller: 'ModalInstanceCtrl as modal'
                    // })
                    //Error
                    .state('app.error', {
                        url: '/error/:errorStatus',
                        template:require('../tpl/error.html'),
                        params: {errorObj: null},
                        controller: 'ErrorCtr as error'
                    })
            }
        ]);
}
