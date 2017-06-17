import gulp from 'gulp';
/*gulp条件判断*/
import gulpif from 'gulp-if';
/*gulp中处理文件拼接*/
import concat from 'gulp-concat';
/*文件打包*/
import webpack from 'webpack';
/*gulp都是处理一些文件流他是基于stream的*/
import gulpWebpack from 'webpack-stream';
/*对文件重命名做标志*/
import named from 'vinyl-named';
/*文件修改浏览器自动刷新的 热更新的包*/
import livereload from 'gulp-livereload';
/*处理文件信息留的包*/
import plumber from 'gulp-plumber';
/*处理文件重命名的包*/
import rename from 'gulp-rename';
/*js和css压缩的包*/
import uglify from 'gulp-uglify';
/*处理命令行的日志和色彩的包*/
import {log, colors} from 'gulp-util';
/*引入自定义的对命令行参数的包*/
import args from './util/args';

/*srcipt任务是将ES6-->ES5的一个任务 写到express模板中的server/public中*/
gulp.task('scripts', () => {
    return gulp.src(['app/js/class/test.js'])
        .pipe(plumber({
            errorHandler: function () {

            }
        }))/*某个环节抛出异常要处理，这里用plumber处理*/
        .pipe(named())
        /*webpack重新编辑*/
        .pipe(gulpWebpack({
            module: {
                loaders: [
                    {
                        test: /\.js$/,
                        loader: 'babel'
                    }
                ]
            }
        }),null,(err,stats)=>{
            log(`Finished'${colors.cyan(scripts)}'`,stats.toString({
                chunk:false
            }))
        })
        .pipe(gulp.dest('server/public/js'))
        /*复制一份文件并重命名，进行压缩，保留不压缩的文件*/
        .pipe(rename({
            basename:'cp',
            extname:'.min.js'
        }))
        /*命名后在进行压缩*/
        .pipe(uglify({compress:{properties:false},output:{'quote_keys':true}}))
        .pipe(gulp.dest('server/public/js'))
        .pipe(gulpif(args.watch,livereload()))
})