(function () {
  'use strict';

  var selfRegistrationLoopBack = angular.module('selfRegistrationLoopBack');

  selfRegistrationLoopBack.controller('PreferencesCtrl', PreferencesCtrl);

  selfRegistrationLoopBack.$inject =
    ['appSpinner', 'selfRegistrationLoopBackApi', '$q', '$rootScope', '$state'];


  function PreferencesCtrl($rootScope, selfRegistrationLoopBackApi, $state) {
    var vm = this;


    vm.savePreferences = savePreferences;
    vm.currentUser =  $rootScope.currentUser;

    function savePreferences() {
        if (vm.currentUser.preferences.street  &&
            vm.currentUser.preferences.street  !== ""  &&
            vm.currentUser.preferences.city    &&
            vm.currentUser.preferences.city    !== ""  &&
            vm.currentUser.preferences.zipcode &&
            vm.currentUser.preferences.zipcode !== "") {

          selfRegistrationLoopBackApi
            .savePreferences(vm.currentUser)
            .then(function(){
               console.log("Preferences saved!");
               $state.go('home');

            });
        }
    }


  }
})();
