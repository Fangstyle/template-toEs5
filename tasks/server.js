import gulp from 'gulp';
/*gulp条件判断*/
import gulpif from 'gulp-if';
/*服务器代码修改，动态重启服务器的包*/
import liveserver from 'gulp-live-server';
/*引入自定义的对命令行参数的包*/
import args from './util/args';

gulp.task('serve',(cb)=>{
    if(!args.watch) return cb();

    var server = liveserver.new(['--harmony','server/bin/www']);
    server.start();
    /*需要重新刷新浏览器*/
    gulp.watch(['server/public/**/*.js','server/views/**/*.ejs'],function(file){
        server.notify.apply(server,[file]);
    })
    /*服务器端口，或者路由发生改变，则需要重启服务器*/
    gulp.watch(['server/routes/**/*.js','server/app.js'],function(){
        server.start.bind(server)()
    });
})
