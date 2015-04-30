(function () {
  'use strict';

  angular.module('selfRegistrationLoopBack')
    .factory('selfRegistrationLoopBackApi', selfRegistrationLoopBackApi)
    .factory('AuthService', AuthService);


  selfRegistrationLoopBackApi.$inject = ['Subscriber', 'appSpinner', '$q', '$rootScope'];

  function selfRegistrationLoopBackApi(Subscriber, appSpinner) {

    var service = {
      retrieveCurrentUser: retrieveCurrentUser,
      getWeather: getWeather,
      savePreferences: savePreferences

    };


    return service;

    function retrieveCurrentUser(userId) {

      return Subscriber
          .findById(
          {
              id: userId
          });
    }

    function getWeather(subscriber) {

      return Subscriber
        .getWeather(
             {
               id: subscriber.id
             }
        )
        .$promise;
    }

    function savePreferences(subscriber) {
      return Subscriber
             .upsert(subscriber)
             .$promise;

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
            username: response.user.username,
            email: email,
            preferences: response.user.preferences || null
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

    function register(username, email, password) {
      return Subscriber
        .create({
          username: username,
          email: email,
          password: password
        })
        .$promise
        .then(function (response) {
           return login(email, password);
        });;
    }

    return {
      login: login,
      logout: logout,
      register: register
    };

  }
})();
