(function () {
    'use strict';

    angular.module('selfRegistrationLoopBack').controller('SignUpCtrl', SignUp);

    /* @ngInject */
    function SignUp() {
        /* jshint validthis: true */
        var vm = this;

        vm.activate = activate;

        activate();

        ////////////////

        function activate() {
        }


    }
})();
