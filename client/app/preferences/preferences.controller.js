(function () {
    'use strict';

    angular.module('selfRegistrationLoopBack').controller('PreferencesCtrl', PreferencesCtrl);

    /* @ngInject */
    function PreferencesCtrl() {
        /* jshint validthis: true */
        var vm = this;

        vm.activate = activate;

        activate();

        ////////////////

        function activate() {
        }


    }
})();
