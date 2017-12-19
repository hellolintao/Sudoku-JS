// 生成九宫格
const Toolkit = require("../core/toolkit");
const Generator = require("../core/generator");
const Sudoku = require("../core/sudoku");
const Checker = require("../core/checker");
class Grid{
    // _$表示是一个私人的变量 在外面尽量不要访问这样的变量
    constructor(container){
        this._$container = container;
        this.build();
        this.layout();
    }

    // 生成一个九宫格
    build(){
        const sudoku = new Sudoku();
        sudoku.make();
        const matrix = sudoku.puzzlematirx;
        // // 得到一个二维随机数组
        const rowGroupClasses = ["row_g_top","row_g_middle","row_g_bottom"];
        const colGroupClasses = ["col_g_left","col_g_center","col_g_right"];
        // 声明一个变量，第一次使用map遍历数组，
        // 第二次使用map遍历第二维的数组
        // 数组中的每一项都返回了<span>cellValue</span>
        const $cells = matrix .map(rowValues => rowValues.map((cellValue, colIndex) => {
                            return $("<span>")
                                .addClass(colGroupClasses[colIndex % 3])
                                .addClass(cellValue ? "fixed" : "empty")
                                .text(cellValue);
                        }));
        // 开始生成divArray 遍历刚才的返回的一堆￥cells  都是每一个小格子
        // 遍历的作用把每一行的小格子放到一个div之中
        // 这个时候 divArray还是一个二维数组，进行第一个map的时候，只是对第一维进行了遍历
        // 所以是9个span在一个div之中
        const $divArray = $cells
                .map(($spanArray,rowIndex) => {
                    return $("<div>")
                            .addClass("row")
                            .addClass(rowGroupClasses[rowIndex % 3])
                            .append($spanArray);
                 });
        this._$container.append($divArray);
    }

    // 布局操作 使每一个格子都是正方形
    layout(){
        const width = $("span:first",this._$container).width();
        $("span",this._$container).height(width)
            .css({
                "line-height":`${width}px`,
                "font-size":width < 32 ? `${width / 2}` : ""
            });
    }

// 检查用户游戏的结果，成功的话进行提示，失败的话进行标记
    check(){
        const data = this._$container.children()
                .map((rowIndex,div) => {
                     return $(div).children().map((colIndex,span) => parseInt($(span).text()) || 0);
        }).toArray().map($data => $data.toArray());
        const checker = new Checker(data);
        if(checker.check()){
            this._$container.find("span").removeClass("mark1 mark2 error");
            return true;
        }
        const marks = checker.matrixMarks;
        this._$container.children()
                .each((rowIndex,div) => {
                    $(div).children().each((colIndex, span) => {
                        const $span = $(span);
                        if($span.is(".fixed") || marks[rowIndex][colIndex]){
                            $(span).removeClass("error");
                        }else{
                            $(span).addClass("error").removeClass("mark1 mark2");
                        }
                    });
                });
    }

// 重置迷盘到初始的状态
    reset(){
        this._$container.find("span:not(.fixed)")
            .removeClass("error mark1 mark2")
            .addClass("empty")
            .text(0);
    }

// 主要是为了清除错误的标记
    clear(){
    this._$container.find("span.error").removeClass("error");
    }

// 这个是对每个格子点击时候的监听 
    bindPopup(popupNumber){
        this._$container.on("click","span",e => {
            const $cell = $(e.target);
            if($cell.hasClass("fixed")){
                return false;
            }else{
                popupNumber.popup($cell);
                
            } 
        });
    }
}
module.exports = Grid;
