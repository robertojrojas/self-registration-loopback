(function () {
  'use strict';

  var selfRegistrationLoopBack = angular.module('selfRegistrationLoopBack');

  selfRegistrationLoopBack.controller('HomeCtrl', HomeCtrl);

  selfRegistrationLoopBack.$inject =
    ['appSpinner', 'selfRegistrationLoopBackApi', '$q', '$rootScope', '$state'];

  function HomeCtrl($rootScope, $state, selfRegistrationLoopBackApi) {

    var vm = this;

    vm.currentUser = $rootScope.currentUser;

    vm.getWeather = getWeather;


    vm.temperatureSymbol = temperatureSymbol(vm.currentUser);

    vm.weatherData = null;

    vm.getWeather();

    if ($rootScope.currentUser == null) {
      $state.go('signup');
    }

    function getWeather() {

      if (vm.currentUser && vm.currentUser.preferences) {
        selfRegistrationLoopBackApi
          .getWeather(vm.currentUser)
          .then(function (weatherData) {
            vm.weatherData = weatherData.weather[0];
          });
      }
    }

    function temperatureSymbol(currentUser) {
       if (!currentUser || !currentUser.preferences) {
         return 'F';
       }
       var temperature = currentUser.preferences.temperature || 'imperial';
       return temperature && temperature === 'imperial' ? "F" : "C";
    }


  }
})();
