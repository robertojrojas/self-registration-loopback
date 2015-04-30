var gulp = require('gulp'),
  nodemon = require('gulp-nodemon')

  ;

gulp.task('default', function(){
  nodemon(
    {
      script: 'server/server.js',
      ext: 'js',
      env: {
        PORT: 3000
      },
      ignore: ['./node_modules/**']
    }
  )
    .on('restart', function(){
      console.log('Restarting');
    });
});
