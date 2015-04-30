(function () {
  'use strict';

  var selfRegistrationLoopBack = angular.module('selfRegistrationLoopBack');

  selfRegistrationLoopBack
    .controller('SignUpCtrl', SignUpCtrl)
    .controller('AuthLogoutCtrl', AuthLogoutCtrl);

  selfRegistrationLoopBack.$inject =
    ['appSpinner', 'AuthService', 'Subscriber', '$q', '$rootScope', '$state'];

  function SignUpCtrl($rootScope, $state, AuthService) {

    var vm = this;


    vm.user = {
      loginEmail: '',
      loginPassword: '',
      username: '',
      email: '',
      password: '',
      passwordverify: ''
    };

    vm.clearErrorMessage = function() {
      vm.errorMessage = null;
    };

    vm.clearErrorMessage();

    vm.register = function () {
      AuthService.register(vm.user.username, vm.user.email, vm.user.password)
        .then(function () {
          $rootScope.$broadcast('userLoggedIn', {});
          $state.transitionTo('home');
        });
    };


    vm.login = function () {
      AuthService.login(vm.user.loginEmail, vm.user.loginPassword)
        .then(
        function () {
          vm.clearErrorMessage();
          $rootScope.$broadcast('userLoggedIn', {});
          $state.go('home');
        },
        function(errorMessage){
          console.log(errorMessage);
          vm.errorMessage = errorMessage.data.error.message;
        });
    };

  }

  function AuthLogoutCtrl(AuthService, $rootScope, $state) {
    AuthService.logout()
      .then(function () {
        $rootScope.$broadcast('userLoggedOut', {});
        $state.go('home');
      });
  }


})();
