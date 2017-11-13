// 生成数组游戏
// 1.生成完成的解决方案  使用的是Generator
// 2.随机去除部分数据：按照比例去除
const Generator=require("./generator");

module.exports=class Sudoku{
    //生成解决方案
    constructor(){
        const generator=new Generator();
        generator.generate();
        this.solutionMatrix=generator.martrix;
    }
    // 生成迷盘
    make(level=5){
        this.puzzlematirx=this.solutionMatrix.map(row=>{
            return row.map(cell=>Math.random()*9<level?0:cell);
        });
    }
};
