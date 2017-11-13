module.exports = {
    // entry可以是一个字符串，也可是是一个数组
    // 字符串用来定义入口文件
    // 是数组的话是一个入口文件，一个静态资源服务器
    // 是对象的话，可以将不同的文件构建成不同的文件，hello:'./js/hello.js'
    entry:{
        index:"./js/index"
    },

    // output的蚕食是个对象，用于定义构建后的文件的输出，其中包括path和filename
    // 当在entry中定义购进多个文件的时候，filename可以更改为[name].js用于定义不同文件构建后的名字
    output:{
        filename:"[name].js"
    },

    // 下面这个是webpack2的写法，和以前的版本有不一样的地方
    module:{
        rules:[
           {
                test:/\.js$/,
                use:{
                    loader:"babel-loader",
                    options:{
                        presets:["es2015"]
                    }
                },
                exclude:/(node_modules|bower_components)/
           } 

        ]
    },

    devtool:"source-map",

    /*webpack在构建包的时候会按照牡蛎的进行文件的查找，resolve属性中的
    extensions数组中用于配置程序可以自行补全哪些文件后缀
    当我们想要加载一个js文件的时候，之后写文件的名字不用加后缀就可以了*/
    resolve:{
        extensions:[".js"]
    }
    /*关于模块的加载相关，我们就定义在module.loaders中
    这里通过正则表达式去匹配不同后缀的文件名，然后定义不同的加载器
    给css和less还有图片提那家了loader之后，我们不仅可以想再node那样require js文件了，
    我们还可以require css、less文件
    require就是加载外部资源的*/
};