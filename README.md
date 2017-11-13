# sudoku
## 这个是使用ES6 jQuery Less完成的数独的小游戏。
### 开发环境的配置
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
