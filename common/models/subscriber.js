module.exports = function(Subscriber) {

  // Google Maps API has a rate limit of 10 requests per second
  // Seems we need to enforce a lower rate to prevent errors
  var lookupGeo = require('function-rate-limit')(5, 1000, function() {
    var geoService = Subscriber.app.dataSources.geo;
    geoService.geocode.apply(geoService, arguments);
  });


  Subscriber.beforeRemote('prototype.updateAttributes', function(ctx, user, next) {
    var body = ctx.req.body;
    console.log('before updateAttributes...');
    if (body                    &&
        body.preferences        &&
        body.preferences.street &&
        body.preferences.city   &&
        body.preferences.state ) {

      var loc = body.preferences;
      console.log('preferences present');

      // geo code the address
      lookupGeo(loc.street, loc.city, loc.state,
        function(err, result) {
           if (result && result[0]) {
            body.preferences.geo = result[0];
            next();
          } else {
             //TODO: Need to find out how to handle this with better a UX experience
            next(new Error('could not find location'));
          }
        });

    } else {
      console.log('NO preferences present');
      next();
    }

  });


  Subscriber.getWeather = function(subscriberId, cb){
    Subscriber.findById(subscriberId, function (err, instance) {

      response = 'Subscriber is ' + instance.username;
      console.log(response);
      if (instance && instance.preferences && instance.preferences.geo) {
        var lat = instance.preferences.geo.lat;
        var lon = instance.preferences.geo.lng;

        var openWeatherMap = Subscriber.app.dataSources.openweathermap;
        openWeatherMap.getweather
        (
          lat,
          lon,
          function(err, results){

            if (err) {
              cb(err);
            } else {
              console.log(results);
              cb(null, results);
            }

          }
        );

      } else {
        cb(null, {});
      }



    })
  };


  Subscriber.remoteMethod('getWeather', {
    accepts: [
      {arg: 'id', type: 'string', required: true}
    ],
    // mixing ':id' into the rest url allows $owner to be determined and used for access control
    http: {path: '/:id/weather', verb: 'get'},
    returns: {arg: 'weather', type: 'object'}
  });

};
