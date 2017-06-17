import gulp from 'gulp';
/*gulp条件判断*/
import gulpif from 'gulp-if';
/*处理命令行的日志和色彩的包*/
import gutil from 'gulp-util';
/*引入自定义的对命令行参数的包*/
import args from './util/args';

/*将browser 和其他任务相互关联*/
gulp.task('browser',(cb)=>{
    if(!args.watch) return cb();
    gulp.watch('app/**/*.js',['scripts']);
    gulp.watch('app/**/*.ejs',['pages']);
    gulp.watch('app/**/*.css',['css']);
});

