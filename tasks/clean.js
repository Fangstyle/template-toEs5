import gulp from 'gulp';
/*删除文件的包*/
import del from 'del';
/*引入自定义的对命令行参数的包*/
import args from './util/args';

/*当文件发生改变后，需要将server/public 下对应的文件先删除后复制，以免产生脏数据*/
gulp.task('clean',()=>{
     return del(['server/public','server/views']);
})