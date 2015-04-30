(function () {
  'use strict';

  var selfRegistrationLoopBack = angular.module('selfRegistrationLoopBack');

  selfRegistrationLoopBack
    .controller('SignUpCtrl', SignUpCtrl)
    .controller('AuthLogoutCtrl', AuthLogoutCtrl);

  selfRegistrationLoopBack.$inject =
    ['appSpinner', 'AuthService', 'Subscriber', '$q', '$rootScope', '$state'];

  function SignUpCtrl($state, AuthService) {

    var vm = this;

    vm.user = {
      loginEmail: '',
      loginPassword: '',
      username: '',
      email: '',
      password: '',
      passwordverify: ''
    };


    vm.register = function () {
      AuthService.register(vm.user.username, vm.user.email, vm.user.password)
        .then(function () {
          $state.transitionTo('home');
        });
    };


    vm.login = function () {
      AuthService.login(vm.user.loginEmail, vm.user.loginPassword)
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
