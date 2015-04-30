(function () {
  'use strict';

  var selfRegistrationLoopBack = angular.module('selfRegistrationLoopBack');

  selfRegistrationLoopBack.controller('HomeCtrl', HomeCtrl);

  selfRegistrationLoopBack.$inject =
    ['appSpinner', 'selfRegistrationLoopBackApi', '$q', '$rootScope', '$state'];

  /* @ngInject */
  function HomeCtrl($rootScope, $state, selfRegistrationLoopBackApi) {

    var vm = this;

    vm.currentUser = $rootScope.currentUser;

    vm.getWeather = getWeather;

    vm.getWeather();

    function getWeather() {

      if (vm.currentUser && vm.currentUser.preferences) {
        selfRegistrationLoopBackApi
          .getWeather(vm.currentUser)
          .then(function (weatherData) {
              console.log(weatherData);
          });
      }

    }


  }
})();
