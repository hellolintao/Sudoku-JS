/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var matrixToolkit = {
    makeRow: function makeRow() {
        var v = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

        var array = new Array(9);
        array.fill(v);
        return array;
    },
    makeMatrix: function makeMatrix() {
        var _this = this;

        var v = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

        return Array.from({ length: 9 }, function () {
            return _this.makeRow(v);
        });
    },

    // 实现洗牌算法
    // Fisher-Yates
    shuffle: function shuffle(array) {
        var endIndex = array.length - 2;
        for (var i = 0; i < endIndex; i++) {
            var j = i + Math.floor(Math.random() * (array.length - i));
            var _ref = [array[j], array[i]];
            array[i] = _ref[0];
            array[j] = _ref[1];
        }
        return array;
    },

    // 检查指定的位置是否可以填写数字n
    checkFillable: function checkFillable(martrix, n, rowIndex, colIndex) {
        var row = martrix[rowIndex];
        var colum = this.makeRow().map(function (v, i) {
            return martrix[i][colIndex];
        });

        var _boxToolkit$converTob = boxToolkit.converToboxIndex(rowIndex, colIndex),
            boxIndex = _boxToolkit$converTob.boxIndex;

        var box = boxToolkit.getBoxCells(martrix, boxIndex);
        for (var i = 0; i < 9; i++) {
            if (row[i] === n || colum[i] === n || box[i] === n) {
                return false;
            }
        }
        return true;
    },
    getBoxCells: function getBoxCells(matrix, boxIndex) {
        var startRowIndex = Math.floor(boxIndex / 3) * 3;
        var startColIndex = boxIndex % 3 * 3;
        var result = [];
        for (var cellIndex = 0; cellIndex < 9; cellIndex++) {
            var rowIndex = startRowIndex + Math.floor(cellIndex / 3);
            var colIndex = startColIndex + cellIndex % 3;
            result.push(matrix[rowIndex][colIndex]);
        }
        return result;
    },
    converToboxIndex: function converToboxIndex(rowIndex, colIndex) {
        return {
            boxIndex: Math.floor(rowIndex / 3) * 3 + Math.floor(colIndex / 3),
            cellIndex: rowIndex % 3 * 3 + colIndex % 3
        };
    },
    converFromBoxIndex: function converFromBoxIndex(boxIndex, cellIndex) {
        return {
            rowIndex: Math.floor(boxIndex / 3) * 3 + Math.floor(cellIndex / 3),
            colIndex: boxIndex % 3 * 3 + cellIndex % 3
        };
    }
};

var boxToolkit = {
    getBoxCells: function getBoxCells(matrix, boxIndex) {
        var startRowIndex = Math.floor(boxIndex / 3) * 3;
        var startColIndex = boxIndex % 3 * 3;
        var result = [];
        for (var cellIndex = 0; cellIndex < 9; cellIndex++) {
            var rowIndex = startRowIndex + Math.floor(cellIndex / 3);
            var colIndex = startColIndex + cellIndex % 3;
            result.push(matrix[rowIndex][colIndex]);
        }
        return result;
    },
    converToboxIndex: function converToboxIndex(rowIndex, colIndex) {
        return {
            boxIndex: Math.floor(rowIndex / 3) * 3 + Math.floor(colIndex / 3),
            cellIndex: rowIndex % 3 * 3 + colIndex % 3
        };
    },
    converFromBoxIndex: function converFromBoxIndex(boxIndex, cellIndex) {
        return {
            rowIndex: Math.floor(boxIndex / 3) * 3 + Math.floor(cellIndex / 3),
            colIndex: boxIndex % 3 * 3 + cellIndex % 3
        };
    }
};

// 生成工具集
module.exports = function () {
    function Toolkit() {
        _classCallCheck(this, Toolkit);
    }

    _createClass(Toolkit, null, [{
        key: "matrix",

        // 矩阵和数据相关的工具
        get: function get() {
            return this.matrixToolkit;
        }
        // 宫坐标系相关的工具

    }, {
        key: "box",
        get: function get() {
            return this.boxToolkit;
        }
    }]);

    return Toolkit;
}();
module.exports = boxToolkit;
module.exports = matrixToolkit;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// 生成数独解决方案
var Toolkit = __webpack_require__(0);
module.exports = function () {
    function Generator() {
        _classCallCheck(this, Generator);
    }

    _createClass(Generator, [{
        key: "generate",
        value: function generate() {
            while (!this.internalgenerate()) {
                console.warn("try again");
            }
        }
    }, {
        key: "internalgenerate",
        value: function internalgenerate() {
            this.martrix = Toolkit.makeMatrix();
            this.orders = Toolkit.makeMatrix().map(function (row) {
                return row.map(function (v, i) {
                    return i;
                });
            }).map(function (row) {
                return Toolkit.shuffle(row);
            });
            for (var n = 1; n <= 9; n++) {
                if (!this.fillNumber(n)) {
                    return false;
                }
            }
            return true;
        }
    }, {
        key: "fillNumber",
        value: function fillNumber(n) {
            return this.fillRow(n, 0);
        }
    }, {
        key: "fillRow",
        value: function fillRow(n, rowIndex) {
            if (rowIndex > 8) {
                return true;
            }

            var row = this.martrix[rowIndex];
            var orders = this.orders[rowIndex];
            // 随机选择列
            for (var i = 0; i < 9; i++) {
                var colIndex = orders[i];
                // 如果这个位置已经有了值，跳过
                if (row[colIndex]) {
                    continue;
                }
                // 检查这个地方是否可以填写N
                if (!Toolkit.checkFillable(this.martrix, n, rowIndex, colIndex)) {
                    continue;
                }
                row[colIndex] = n;
                // 去下一行填写n，如果没有填写进去，那么就继续寻找下一行
                if (!this.fillRow(n, rowIndex + 1)) {
                    row[colIndex] = 0;
                    continue;
                }
                return true;
            }
            return false;
            // 当前行填写n成功，递归当前函数，fillrow来在下一行中填写n 
        }
    }]);

    return Generator;
}();
// const generator=new Generator();
// generator.generate();
// console.log(generator.martrix);

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var PopupNumbers = __webpack_require__(3);
var Grid = __webpack_require__(4);
var grid = new Grid($("#container"));

var popupNumbers = new PopupNumbers($("#popupNumbers"));
grid.bindPopup(popupNumbers);

//  按钮进行事件绑定
$("#check").on("click", function (e) {
  if (grid.check()) {
    alert("Sucess!");
  }
});
$("#reset").on("click", function (e) {
  grid.reset();
});
$("#clear").on("click", function (e) {
  grid.clear();
});

$("#rebuild").on("click", function (e) {
  console.log("!!!!");
  //fun();
  location.reload();
  // grid._$container.empty();
  // grid=new Grid($("#container"));
});

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// 处理弹出的操作面板

module.exports = function () {
    function PopupNumbers($panel) {
        var _this = this;

        _classCallCheck(this, PopupNumbers);

        this._$panel = $panel.hide().removeClass("hidden");
        this._$panel.on("click", "span", function (e) {
            var $cell = _this._targetcell;
            var $span = $(e.target);

            // mark  回填样式
            if ($span.hasClass("mark1")) {
                if ($cell.hasClass("mark1")) {
                    $cell.removeClass("mark1");
                } else {
                    $cell.removeClass("mark2").addClass("mark1");
                }
            } else if ($span.hasClass("mark2")) {
                if ($cell.hasClass("mark2")) {
                    $cell.removeClass("mark2");
                } else {
                    $cell.removeClass("mark1").addClass("mark2");
                }
            } else if ($span.hasClass("empty")) {
                // 取消数字和mark
                $cell.removeClass("mark1").removeClass("mark2");
                $cell.text(0).addClass("empty");
            } else {
                $cell.removeClass("empty").text($span.text());
                // 1-9  填写数字
            }
            _this.hide();
        });
    }

    _createClass(PopupNumbers, [{
        key: "popup",
        value: function popup($cell) {
            this._targetcell = $cell;

            var _$cell$position = $cell.position(),
                left = _$cell$position.left,
                top = _$cell$position.top;

            var temp = $(window).width();
            var temp2 = temp - temp / 5.5;
            if (left > temp2) {
                this._$panel.css({
                    left: temp - temp / 5.5 - 120 + "px",
                    top: top - 60 + "px"
                }).show();
            } else {
                this._$panel.css({
                    left: left - 60 + "px",
                    top: top - 60 + "px"
                }).show();
            }
        }
    }, {
        key: "hide",
        value: function hide() {
            this._$panel.hide();
        }
    }]);

    return PopupNumbers;
}();

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// 生成九宫格
var Toolkit = __webpack_require__(0);
var Generator = __webpack_require__(1);
var Sudoku = __webpack_require__(5);
var Checker = __webpack_require__(6);

var Grid = function () {
    // _$表示是一个私人的变量 在外面尽量不要访问这样的变量
    function Grid(container) {
        _classCallCheck(this, Grid);

        this._$container = container;
        this.build();
        this.layout();
    }

    _createClass(Grid, [{
        key: "rebuild",
        value: function rebuild() {
            // console.log(this._$container);
            // var a=this._$container;

            // console.log(this._$container.children());
            // this._$container.empty();
            // console.log(this._$container.children());
            // this.build();
            this.layout();
        }
    }, {
        key: "build",
        value: function build() {
            var sudoku = new Sudoku();
            sudoku.make();
            var matrix = sudoku.puzzlematirx;
            // const generator=new Generator();
            // generator.generate();

            // // 得到一个二维随机数组
            // const matrix=generator.martrix;
            var rowGroupClasses = ["row_g_top", "row_g_middle", "row_g_bottom"];
            var colGroupClasses = ["col_g_left", "col_g_center", "col_g_right"];

            // 声明一个变量，第一次使用map遍历数组，
            // 第二次使用map遍历第二维的数组
            // 数组中的每一项都返回了<span>cellValue</span>
            var $cells = matrix.map(function (rowValues) {
                return rowValues.map(function (cellValue, colIndex) {
                    return $("<span>").addClass(colGroupClasses[colIndex % 3]).addClass(cellValue ? "fixed" : "empty").text(cellValue);
                });
            });
            // 开始生成divArray 遍历刚才的返回的一堆￥cells  都是每一个小格子
            // 遍历的作用把每一行的小格子放到一个div之中
            // 这个时候 divArray还是一个二维数组，进行第一个map的时候，只是对第一维进行了遍历
            // 所以是9个span在一个div之中
            var $divArray = $cells.map(function ($spanArray, rowIndex) {
                console.log(rowIndex);
                return $("<div>").addClass("row").addClass(rowGroupClasses[rowIndex % 3]).append($spanArray);
            });
            this._$container.append($divArray);
        }
    }, {
        key: "layout",
        value: function layout() {
            var width = $("span:first", this._$container).width();
            $("span", this._$container).height(width).css({
                "line-height": width + "px",
                "font-size": width < 32 ? "" + width / 2 : ""
            });
        }
        // 检查用户游戏的结果，成功的话进行提示，失败的话进行标记

    }, {
        key: "check",
        value: function check() {
            var data = this._$container.children().map(function (rowIndex, div) {
                return $(div).children().map(function (colIndex, span) {
                    return parseInt($(span).text()) || 0;
                });
            }).toArray().map(function ($data) {
                return $data.toArray();
            });
            console.log(data);
            var checker = new Checker(data);
            if (checker.check()) {
                this._$container.find("span").removeClass("mark1 mark2 error");
                return true;
            }
            var marks = checker.matrixMarks;
            console.log(marks);
            this._$container.children().each(function (rowIndex, div) {
                $(div).children().each(function (colIndex, span) {
                    var $span = $(span);
                    if ($span.is(".fixed") || marks[rowIndex][colIndex]) {
                        $(span).removeClass("error");
                    } else {
                        $(span).addClass("error").removeClass("mark1 mark2");
                    }
                });
            });
        }
        // 重置迷盘到初始的状态

    }, {
        key: "reset",
        value: function reset() {
            this._$container.find("span:not(.fixed)").removeClass("error mark1 mark2").addClass("empty").text(0);
        }
        // 主要是为了清除错误的标记

    }, {
        key: "clear",
        value: function clear() {
            this._$container.find("span.error").removeClass("error");
        }
    }, {
        key: "bindPopup",
        value: function bindPopup(popupNumber) {
            console.log("222");
            this._$container.on("click", "span", function (e) {
                var $cell = $(e.target);
                if ($cell.hasClass("fixed")) {
                    return false;
                } else {
                    popupNumber.popup($cell);
                }
            });
        }
    }]);

    return Grid;
}();

module.exports = Grid;
// 最后的是所有都成功的时候也要移除error

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// 生成数组游戏
// 1.生成完成的解决方案  使用的是Generator
// 2.随机去除部分数据：按照比例去除
var Generator = __webpack_require__(1);

module.exports = function () {
    function Sudoku() {
        _classCallCheck(this, Sudoku);

        // 生成解决方案
        var generator = new Generator();
        generator.generate();
        this.solutionMatrix = generator.martrix;
    }

    _createClass(Sudoku, [{
        key: "make",
        value: function make() {
            var level = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 5;

            // 生成迷盘
            // const shouldRid=Math.random()*9<level;
            this.puzzlematirx = this.solutionMatrix.map(function (row) {
                return row.map(function (cell) {
                    return Math.random() * 9 < level ? 0 : cell;
                });
            });
        }
    }]);

    return Sudoku;
}();

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// 检查数据解构 
function checkArray(array) {
    var length = array.length;
    var marks = new Array(length);
    marks.fill(true);
    for (var i = 0; i < length; i++) {
        if (!marks[i]) {
            continue;
        }
        var v = array[i];
        // 是否是0  是的话无效，不是的话有效
        if (!v) {
            marks[i] = false;
            continue;
        }
        // 检查是否重复，重复的话无效，不重复的话有效
        for (var j = i + 1; j < length; j++) {
            if (v === array[j]) {
                marks[i] = marks[j] = false;
            }
        }
    }
    return marks;
}

var Toolkit = __webpack_require__(0);
// 输入“matrix  用户完成的数据 9x9
// 处理 对matrix行 列 宫进行检查  并且填写marks
// 输出“检查是否成功、marks

var Checker = function () {
    function Checker(matrix) {
        _classCallCheck(this, Checker);

        this._matrix = matrix;
        this._martrixMarks = Toolkit.makeMatrix(true);
        console.log(this._martrixMarks);
    }

    _createClass(Checker, [{
        key: "check",
        value: function check() {
            this.checkRows();
            this.checkCols();
            this.checkBoxes();

            // 检查是否成功
            this._sucess = this._martrixMarks.every(function (row) {
                return row.every(function (mark) {
                    return mark;
                });
            });
            return this._sucess;
        }
    }, {
        key: "checkRows",
        value: function checkRows() {
            for (var rowIndex = 0; rowIndex < 9; rowIndex++) {

                var row = this._matrix[rowIndex];
                var marks = checkArray(row);

                for (var colIndex = 0; colIndex < marks.length; colIndex++) {
                    console.log("AA" + rowIndex, colIndex);
                    console.log(marks[colIndex]);
                    if (!marks[colIndex]) {
                        console.log(rowIndex, colIndex);
                        this._martrixMarks[rowIndex][colIndex] = false;
                    }
                }
            }
        }
    }, {
        key: "checkCols",
        value: function checkCols() {
            for (var colIndex = 0; colIndex < 9; colIndex++) {
                var cols = [];
                for (var rowIndex = 0; rowIndex < 9; rowIndex++) {
                    cols[rowIndex] = this._matrix[rowIndex][colIndex];
                }
                var marks = checkArray(cols);
                for (var _rowIndex = 0; _rowIndex < 9; _rowIndex++) {
                    if (!marks[_rowIndex]) {
                        this._martrixMarks[_rowIndex][colIndex] = false;
                    }
                }
            }
        }
    }, {
        key: "checkBoxes",
        value: function checkBoxes() {
            for (var boxIndex = 0; boxIndex < 9; boxIndex++) {

                var test = Toolkit.makeRow();
                var boxes = Toolkit.getBoxCells(matrix, boxIndex);
                var marks = checkArray(boxes);
                for (var cellIndex = 0; cellIndex < 9; cellIndex++) {
                    if (!marks[cellIndex]) {
                        var _Toolkit$converFromBo = Toolkit.converFromBoxIndex(boxIndex, cellIndex),
                            rowIndex = _Toolkit$converFromBo.rowIndex,
                            colIndex = _Toolkit$converFromBo.colIndex;

                        this._martrixMarks[rowIndex][colIndex] = false;
                    }
                }
            }
        }
    }, {
        key: "matrixMarks",
        get: function get() {

            return this._martrixMarks;
        }
    }, {
        key: "isSucess",
        get: function get() {
            return this._sucess;
        }
    }]);

    return Checker;
}();

module.exports = Checker;

var Generator = __webpack_require__(1);
var gen = new Generator();
gen.generate();
var matrix = gen.martrix;
var checker = new Checker(matrix);
console.log("check result", checker.check());
console.log(checker.matrixMarks);

// matrix[1][1]=0;
// matrix[2][3]=matrix[2][5]=5;
// const checker2=new Checker(matrix);
// console.log("check result",checker2.check());
// console.log(checker2.matrixMarks);

/***/ })
/******/ ]);
//# sourceMappingURL=index.js.map