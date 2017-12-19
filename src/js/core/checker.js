// 检查数据解构 
function checkArray(array){
    const length = array.length;
    const marks = new Array(length);
    marks.fill(true);
    for(let i = 0;i < length;i ++){
        if(!marks[i]){
            continue;
        }
        const v = array[i];
        // 是否是0  是的话无效，不是的话有效
        if(!v){
            marks[i] = false;
            continue;
        }
        // 检查是否重复，重复的话无效，不重复的话有效
        for(let j = i + 1; j < length; j ++){
            if(v === array[j]){
                marks[i] = marks[j] = false;
            }
        }
    }
    return marks;
}

const Toolkit = require("./toolkit");

// 输入“matrix  用户完成的数据 9x9
// 处理 对matrix行 列 宫进行检查  并且填写marks
// 输出“检查是否成功、marks
class Checker{
    constructor(matrix){
        this._matrix = matrix;
        this._martrixMarks = Toolkit.makeMatrix(true);
        console.log(this._martrixMarks);
    }

    get matrixMarks(){
        return this._martrixMarks;
    }

    get isSucess(){
        return this._sucess;
    }

    check(){
        this.checkRows();
        this.checkCols();
        this.checkBoxes();
        
        // 检查是否成功
        this._sucess = this._martrixMarks.every(row => row.every(mark => mark));
        return this._sucess;
    }

    checkRows(){
        for(let rowIndex = 0;rowIndex < 9;rowIndex ++){
            const row = this._matrix[rowIndex];
            const marks = checkArray(row);
            for(let colIndex = 0; colIndex < marks.length; colIndex ++){
                console.log("AA" + rowIndex,colIndex);
                console.log(marks[colIndex]);
                if(!marks[colIndex]){
                    this._martrixMarks[rowIndex][colIndex] = false;
                }
            }
        }
    }

    checkCols(){
        for(let colIndex = 0;colIndex < 9;colIndex ++){
            const cols = [];
            for(let rowIndex = 0;rowIndex < 9;rowIndex ++){
                cols[rowIndex] = this._matrix[rowIndex][colIndex];
            }
            const marks = checkArray(cols);
            for(let rowIndex = 0;rowIndex < 9;rowIndex ++){
                if(!marks[rowIndex]){
                    this._martrixMarks[rowIndex][colIndex] = false;
                }
            }
        }
    }

    checkBoxes(){
        for(let boxIndex = 0;boxIndex < 9;boxIndex ++){
            const test = Toolkit.makeRow();
            const boxes = Toolkit.getBoxCells(matrix,boxIndex);
            const marks = checkArray(boxes);
            for(let cellIndex = 0; cellIndex < 9; cellIndex ++){
                if(!marks[cellIndex]){
                    const {rowIndex,colIndex} = Toolkit.converFromBoxIndex(boxIndex,cellIndex);
                    this._martrixMarks[rowIndex][colIndex] = false;
                }
                
            }
        }
    }
    
}

module.exports = Checker;
const Generator = require("./generator");
const gen = new Generator();
gen.generate();
const matrix = gen.martrix;
const checker = new Checker(matrix);
