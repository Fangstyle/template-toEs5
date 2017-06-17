import gulp from 'gulp';
/*gulp条件判断*/
import gulpif from 'gulp-if';
/*处理命令行的日志和色彩的包*/
import gutil from 'gulp-util';
/*引入自定义的对命令行参数的包*/
import args from './util/args';
import gulpSequence from 'gulp-sequence';

gulp.task('build',gulpSequence('clean','css','pages','scripts',['browser','serve']));

