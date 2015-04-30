(function () {
    'use strict';
    var app = angular.module('selfRegistrationLoopBack', [
        // Angular modules

        // 3rd Party Modules
        'ui.router',
        'lbServices'

    ]);

    app.config(['$stateProvider', '$urlRouterProvider', configRoutes]);

    function configRoutes($stateProvider, $urlRouterProvider) {
      $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'app/home/home.html',
                controller: 'HomeCtrl',
                controllerAs: 'vm'
            })
            .state('preferences', {
                url: '/preferences',
                templateUrl: 'app/preferences/preferences.html',
                controller: 'PreferencesCtrl',
                controllerAs: 'preferencesVm',
                authenticate: true
            })
            .state('signup', {
                url: '/signup',
                templateUrl: 'app/signup/signup.html',
                controller: 'SignUpCtrl',
                controllerAs: 'signupVm'
             })
             .state('logout', {
                url: '/logout',
                controller: 'AuthLogoutCtrl'
             });
      $urlRouterProvider.otherwise('/');
    }

    app.run(['$rootScope', '$state', function($rootScope, $state) {
      $rootScope.$on('$stateChangeStart', function(event, next) {
        // redirect to login page if not logged in
        if (next.authenticate && !$rootScope.currentUser) {
          event.preventDefault(); //prevent current page from loading
          $state.go('signup');
        }
      });

    }]);
})();
