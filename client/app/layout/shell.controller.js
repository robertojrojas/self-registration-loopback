(function () {
    'use strict';

    angular.module('selfRegistrationLoopBack').controller('ShellCtrl', ShellCtrl);

    ShellCtrl.$inject = ['$rootScope'];

    function ShellCtrl($rootScope) {
        var vm = this;

        vm.showSpinner = false;
        vm.spinnerMessage = 'Retrieving data...';

        vm.spinnerOptions = {
            radius: 40,
            lines: 8,
            length: 0,
            width: 30,
            speed: 1.7,
            corners: 1.0,
            trail: 100,
            color: '#428bca'
        };

        vm.currentUser = null;

        $rootScope.$on('spinner.toggle', function (event, args) {
            vm.showSpinner = args.show;
            if (args.message) {
                vm.spinnerMessage = args.message;
            }
        });

      $rootScope.$on('userLoggedIn', function (event, args) {
        vm.currentUser = $rootScope.currentUser;
      });

      $rootScope.$on('userLoggedOut', function (event, args) {
        vm.currentUser = null;
      });
    }
})();
