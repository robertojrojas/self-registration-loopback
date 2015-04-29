(function () {
    'use strict';
    var app = angular.module('selfRegistrationLoopBack', [
        // Angular modules
        'ngRoute'

        // 3rd Party Modules

    ]);

    app.config(['$routeProvider', configRoutes]);

    function configRoutes($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'app/home/home.html',
                controller: 'HomeCtrl',
                controllerAs: 'vm'
            })
            .when('/preferences', {
              templateUrl: 'app/preferences/preferences.html',
              controller: 'PreferencesCtrl',
              controllerAs: 'preferencesVm'
            })
            .when('/signup', {
              templateUrl: 'app/signup/signup.html',
              controller: 'SignupCtrl',
              controllerAs: 'signupVm'
             })
            .when('/login', {
              templateUrl: 'app/login/login.html',
              controller: 'LoginCtrl',
              controllerAs: 'loginVm'
            });


        $routeProvider.otherwise('/');
    }

    app.run(['$route', function ($route) {
        // Include $route to kick start the router.
    }]);
})();
