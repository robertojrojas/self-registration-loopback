(function () {
    'use strict';

    angular.module('selfRegistrationLoopBack').controller('LoginCtrl', LoginCtrl);

    /* @ngInject */
    function LoginCtrl() {
        /* jshint validthis: true */
        var vm = this;

        vm.activate = activate;

        activate();

        ////////////////

        function activate() {
        }


    }
})();
