(function () {
  'use strict';

  var selfRegistrationLoopBack = angular.module('selfRegistrationLoopBack');

  selfRegistrationLoopBack.controller('PreferencesCtrl', PreferencesCtrl);

  selfRegistrationLoopBack.$inject =
    ['appSpinner', 'selfRegistrationLoopBackApi', '$q', '$rootScope', '$state'];

  /* @ngInject */
  function PreferencesCtrl(selfRegistrationLoopBackApi) {
    /* jshint validthis: true */
    var vm = this;

    vm.street      = "";
    vm.city        = "";
    vm.zipcode     = "";
    vm.temperature = "";

    vm.savePreferences = savePreferences;

    function savePreferences() {
        if (vm.street  !== ""  &&
            vm.city    !== ""  &&
            vm.zipcode !== "") {

          vm.currentUser['preferences'] = {
             street:      vm.street,
             city:        vm.city,
             zipcode:     vm.zipcode,
             temperature: vm.temperature
          }

          selfRegistrationLoopBackApi
            .savePreferences(vm.currentUser)
            .then(function(){

            });
        }
    }


  }
})();
