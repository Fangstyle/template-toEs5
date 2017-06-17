/**
 * Created by fangzhen on 2017/6/17.
 */
import gulp from 'gulp';
/*gulp条件判断*/
import gulpif from 'gulp-if';
/*文件修改浏览器自动刷新的 热更新的包*/
import livereload from 'gulp-livereload';
/*引入自定义的对命令行参数的包*/
import args from './util/args';

/*css文件变化的时候，重新刷新 客户端*/
gulp.task('css',()=>{
    return gulp.src('app/**/*.css')
        .pipe(gulp.dest('server/public'))
        .pipe(gulpif(args.watch,livereload()))
})