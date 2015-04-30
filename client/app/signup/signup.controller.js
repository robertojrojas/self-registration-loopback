(function () {
  'use strict';

  var selfRegistrationLoopBack = angular.module('selfRegistrationLoopBack');

  selfRegistrationLoopBack
    .controller('SignUpCtrl', SignUpCtrl)
    .controller('AuthLogoutCtrl', AuthLogoutCtrl);

  selfRegistrationLoopBack.$inject =
    ['appSpinner', 'AuthService', 'Subscriber', '$q', '$rootScope', '$state'];

  /* @ngInject */
  function SignUpCtrl($state, AuthService) {

    var vm = this;

    vm.user = {
      email: 'foo@bar.com',
      password: 'foobar'
    };


    vm.register = function () {
      AuthService.register(vm.user.email, vm.user.password)
        .then(function () {
          $state.transitionTo('home');
        });
    };


    vm.login = function () {
      AuthService.login(vm.user.email, vm.user.password)
        .then(function () {
          $state.go('home');
        });
    };

  }

  function AuthLogoutCtrl(AuthService, $state) {
    AuthService.logout()
      .then(function () {
        $state.go('home');
      });
  }


})();
