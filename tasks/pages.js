import gulp from 'gulp';
/*gulp条件判断*/
import gulpif from 'gulp-if';
/*文件修改浏览器自动刷新的 热更新的包*/
import livereload from 'gulp-livereload';
/*引入自定义的对命令行参数的包*/
import args from './util/args';

/*ejs(html)模板文件变化的时候，重新刷新 客户端*/
gulp.task('pages',()=>{
    return gulp.src('app/**/*.ejs')
        .pipe(gulp.dest('server'))
        .pipe(gulpif(args.watch,livereload()))
})