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
            });


        $routeProvider.otherwise('/');
    }

    app.run(['$route', function ($route) {
        // Include $route to kick start the router.
    }]);
})();
