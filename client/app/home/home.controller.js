(function () {
    'use strict';

    angular.module('selfRegistrationLoopBack').controller('HomeCtrl', HomeCtrl);

    /* @ngInject */
    function HomeCtrl() {
        /* jshint validthis: true */
        var vm = this;

        vm.activate = activate;

        activate();

        ////////////////

        function activate() {
        }


    }
})();
