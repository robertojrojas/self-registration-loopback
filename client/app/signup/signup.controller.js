(function () {
    'use strict';

    angular.module('selfRegistrationLoopBack').controller('SignUpCtrl', SignUpCtrl);

    /* @ngInject */
    function SignUpCtrl() {
        /* jshint validthis: true */
        var vm = this;

        vm.activate = activate;

        activate();

        ////////////////

        function activate() {
        }


    }
})();
