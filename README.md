# sudoku
## 这个是使用ES6 jQuery Less完成的数独的小游戏。
### 文件说明
- src是开发目录
    - js目录
        - core目录 *核心算法*
            - checker.js *检查数据结构*
            - generator.js *生成数独解决方案*
            - sudoku.js *生成数独游戏，随机去除一部分等*
            - toolkit.js *工具集，取得数组，洗牌等*
        - ui目录 *布局相关*
            - grid.js *生成九宫格*
            - popunumbers.js *处理弹出的操作面板*
        - index.js *主要的js文件，也是入口文件*
    - less目录
        - main.less *布局文件*
    - gulpfile.js *gulp配置文件*
    - package.json  *包的信息文件*
    - webpack.config.js *webpack打包工具配置文件*
- www是生成目录
    - css目录 *生成的CSS文件*
    - js目录 *编译成功的js*
    - index.html  *网页的结构*
### 开发环境的配置

- 打包工具使用的是webpack
- 编译工具使用的是babel
- 构建工具使用的是gulp
- 另外包管理是器使用的是yarn 很好用

#### 构建过程
- 首先要安装node.js yarn 
- 然后安装包 webpack bable gulp 
- 继续配置文件 webpack.config.js gulpfile.js 文件配置正确，工具才可以正常使用，除了很多莫名的错误的时候，很可能是工具配置错误造成的，不同版本的工具构建文件的写法可能有一丝丝不同。

*针对以上的补充*
- 安装babel的时候，babel-core babel-loader babel-preset-es2015都是必须的
- gulp是构建工具，gulp-less是构建css的工具 同时还要引入gulp-util包
