(function () {
    'use strict';
    var app = angular.module('selfRegistrationLoopBack', [
        // Angular modules

        // 3rd Party Modules
        'ui.router'

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
              controllerAs: 'preferencesVm'
            })
            .state('signup', {
              url: '/signup',
              templateUrl: 'app/signup/signup.html',
              controller: 'SignUpCtrl',
              controllerAs: 'signupVm'
             })
            .state('forbidden', {
              url: '/forbidden',
              templateUrl: 'views/forbidden.html'
            });
      $urlRouterProvider.otherwise('home');
    }

    app.run(['$rootScope', '$state', function($rootScope, $state) {
      $rootScope.$on('$stateChangeStart', function(event, next) {
        // redirect to login page if not logged in
        if (next.authenticate && !$rootScope.currentUser) {
          event.preventDefault(); //prevent current page from loading
          $state.go('forbidden');
        }
      });
    }]);
})();
