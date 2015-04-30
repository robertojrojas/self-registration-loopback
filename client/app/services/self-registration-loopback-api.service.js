(function () {
  'use strict';

  angular.module('selfRegistrationLoopBack')
    .factory('selfRegistrationLoopBackApi', selfRegistrationLoopBackApi)
    .factory('AuthService', AuthService);


  selfRegistrationLoopBackApi.$inject = ['$http', 'appSpinner', 'Subscriber', '$q', '$rootScope'];

  function selfRegistrationLoopBackApi(Subscriber, appSpinner) {

    var service = {
      getWeather: getWeather,
      savePreferences: savePreferences

    };


    return service;

    function getWeather(subscriber) {

      return Subscriber
        .getWeather(
             {
               street:  subscriber.preferences.street,
               city:    subscriber.preferences.city,
               zipcode: subscriber.preferences.zipcode
             }
        )
        .$promise
        .then(function (response) {
           // get Weather from Response
        });
    }

    function savePreferences(subscriber) {
        return subscriber.$save();
    }


  }

  function AuthService(Subscriber, $q, $rootScope) {

    function login(email, password) {
      return Subscriber
        .login({email: email, password: password})
        .$promise
        .then(function (response) {
          $rootScope.currentUser = {
            id: response.user.id,
            tokenId: response.id,
            email: email
          };
        });
    }

    function logout() {
      return Subscriber
        .logout()
        .$promise
        .then(function () {
          $rootScope.currentUser = null;
        });
    }

    function register(email, password) {
      return Subscriber
        .create({
          email: email,
          password: password
        })
        .$promise;
    }

    return {
      login: login,
      logout: logout,
      register: register
    };

  }
})();
