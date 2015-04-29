(function () {
    'use strict';

    angular.module('selfRegistrationLoopBack').factory('appSpinner', appSpinner);

    appSpinner.$inject = ['$rootScope'];

    function appSpinner($rootScope) {
        var service = {
            hideSpinner: hideSpinner,
            showSpinner: showSpinner
        };

        return service;


        function hideSpinner() {
            toggleSpinner(false);
        }

        function showSpinner(message) {
            toggleSpinner(true, message);
        }

        function toggleSpinner(show, message) {
            $rootScope.$broadcast('spinner.toggle', { show: show, message: message });
        }
    }
})();
