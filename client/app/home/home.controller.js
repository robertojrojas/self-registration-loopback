(function () {
  'use strict';

  var selfRegistrationLoopBack = angular.module('selfRegistrationLoopBack');

  selfRegistrationLoopBack.controller('HomeCtrl', HomeCtrl);

  selfRegistrationLoopBack.$inject =
    ['appSpinner', 'selfRegistrationLoopBackApi', '$q', '$rootScope', '$state'];

  /* @ngInject */
  function HomeCtrl($state, selfRegistrationLoopBackApi) {

    var vm = this;

    //vm.activate = activate;
    //
    //activate();
    //
    //////////////////
    //
    //function activate() {
    //}

    vm.getWeather = getWeather;

    vm.getWeather();

    function getWeather() {

      if (vm.currentUser && vm.currentUser.preferences) {
        selfRegistrationLoopBackApi
          .getWeather(vm.currentUser)
          .then(function (weatherData) {

          });
      }

    }


  }
})();
