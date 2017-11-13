const matrixToolkit={
    makeRow(v=0){
        const array=new Array(9);
        array.fill(v);
        return array;
    },

    makeMatrix(v = 0){
        return Array.from({length:9},()=>this.makeRow(v));
    },

    // 实现洗牌算法
    // Fisher-Yates
    shuffle(array){
        const endIndex=array.length-2;
        for(let i=0;i<endIndex;i++){
            const j=i+Math.floor(Math.random()*(array.length-i));
            [array[i],array[j]]=[array[j],array[i]];
        }
        return array;
    },

    // 检查指定的位置是否可以填写数字n
    checkFillable(martrix,n,rowIndex,colIndex){
        const row=martrix[rowIndex];
        const colum=this.makeRow().map((v,i)=>martrix[i][colIndex]);
        const {boxIndex}=boxToolkit.converToboxIndex(rowIndex,colIndex);
        const box=boxToolkit.getBoxCells(martrix,boxIndex);
        for(let i=0;i<9;i++){
            if(row[i]===n||colum[i]===n||box[i]===n){
                return false;
            }
        }
        return true;
    },

    getBoxCells(matrix,boxIndex){
        const startRowIndex=Math.floor(boxIndex/3)*3;
        const startColIndex=boxIndex%3*3;
        const result=[];
        for(let cellIndex=0;cellIndex<9;cellIndex++){
            const rowIndex=startRowIndex+Math.floor(cellIndex/3);
            const colIndex=startColIndex+cellIndex%3;
            result.push(matrix[rowIndex][colIndex]);
        }
        return result;
    },

    converToboxIndex(rowIndex,colIndex){
        return {
            boxIndex:Math.floor(rowIndex/3)*3+Math.floor(colIndex/3),
            cellIndex:rowIndex%3*3+colIndex%3
        };
    },

    converFromBoxIndex(boxIndex,cellIndex){
        return {
            rowIndex:Math.floor(boxIndex/3)*3+Math.floor(cellIndex/3),
            colIndex:boxIndex%3*3+cellIndex%3
        };
    }
};




const boxToolkit={
    getBoxCells(matrix,boxIndex){
        const startRowIndex=Math.floor(boxIndex/3)*3;
        const startColIndex=boxIndex%3*3;
        const result=[];
        for(let cellIndex=0;cellIndex<9;cellIndex++){
            const rowIndex=startRowIndex+Math.floor(cellIndex/3);
            const colIndex=startColIndex+cellIndex%3;
            result.push(matrix[rowIndex][colIndex]);
        }
        return result;
    },

    converToboxIndex(rowIndex,colIndex){
        return {
            boxIndex:Math.floor(rowIndex/3)*3+Math.floor(colIndex/3),
            cellIndex:rowIndex%3*3+colIndex%3
        };
    },
    
    converFromBoxIndex(boxIndex,cellIndex){
        return {
            rowIndex:Math.floor(boxIndex/3)*3+Math.floor(cellIndex/3),
            colIndex:boxIndex%3*3+cellIndex%3
        };
    }

};

// 生成工具集
module.exports=class Toolkit{
    // 矩阵和数据相关的工具
    static get matrix(){
        return this.matrixToolkit;
    }
    // 宫坐标系相关的工具
    static get box(){
        return this.boxToolkit;
    }
};
module.exports = boxToolkit;
module.exports = matrixToolkit;


