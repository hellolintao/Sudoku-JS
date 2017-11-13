// 导入gulp
const gulp = require("gulp");
// 转译js
gulp.task("webpack",() => {
    // 引用webpack的模块，然后指定源文件和输出文件
    // config是配置
    const webpack = require("webpack-stream");
    const config = require("./webpack.config.js");
    gulp.src("./js/**/*.js")
        .pipe(webpack(config))
        .pipe(gulp.dest("../www/js"));
});
// 编辑less-->css--这个方法主要是定义任务
gulp.task("less",() =>{
    const less = require("gulp-less");
    gulp.src("./less/*.less")
        .pipe(less())
        .pipe(gulp.dest("../www/css"))
});
// 默认任务
gulp.task("default",["webpack","less"]);

// watch任务

gulp.task("watch",()=>{
    gulp.watch("less/**/*.less",["less"]);
    gulp.watch("js/**/*.js",["webpack"]);
});