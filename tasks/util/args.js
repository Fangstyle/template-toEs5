import yargs from 'yargs';
/* 引入这个包  然后.option的参数表示 gulp -production 截取-后面的参数
 production是本人自定义的一个参数 表示是否是开发环境
 */
const args = yargs
    .option('production', {
        boolean: true, /*输入这个参数就代表true*/
        default: false, /*默认值*/
        describe: 'min all scripts'
    })
    .option('watch', {
        boolean: true, /*输入这个参数就代表true*/
        default: false, /*默认值*/
        describe: 'watch all files'
    })
    .option('verbose', {
        boolean: true, /*输入这个参数就代表true*/
        default: false, /*默认值*/
        describe: 'log all files'/*输出命令行全部日志*/
    })
    .option('sourcemaps', {
        describe: 'force the creation of sourcemaps'
    })
    .option('port', {
        string: true, /*输入这个参数就代表true*/
        default: 8080, /*默认值*/
        describe: 'server port'/*表示运行端口*/
    })
    .argv
/* .argv表示对输入的命令行以字符串类型进行解析*/