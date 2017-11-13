// 生成数独解决方案
const Toolkit=require("./toolkit");
module.exports=class Generator{
    generate(){
        while(!this.internalgenerate()){
            console.warn("try again");
        }
    }
    internalgenerate(){
        this.martrix=Toolkit.makeMatrix();
        this.orders=Toolkit.makeMatrix()
            .map(row=>row.map((v,i)=>i))
            .map(row=>Toolkit.shuffle(row));
        for(let n=1;n<=9;n++){
            if(!this.fillNumber(n)){
                return false;
            }
        }
        return true;
    }
    fillNumber(n){
        return this.fillRow(n,0);
    }
    fillRow(n,rowIndex){
        if(rowIndex>8){
            return true;
        }

        const row=this.martrix[rowIndex];
        const orders=this.orders[rowIndex];
        // 随机选择列
        for(let i=0;i<9;i++){
            const colIndex=orders[i];
            // 如果这个位置已经有了值，跳过
            if(row[colIndex]){
                continue;
            }
            // 检查这个地方是否可以填写N
            if(!Toolkit.checkFillable(this.martrix,n,rowIndex,colIndex)){
                continue;
            }
            row[colIndex]=n;
            // 去下一行填写n，如果没有填写进去，那么就继续寻找下一行
           if(!this.fillRow(n,rowIndex+1)){
               row[colIndex]=0;
               continue;
           }
           return true;
        }
        return false;
        // 当前行填写n成功，递归当前函数，fillrow来在下一行中填写n 
    }
};
// const generator=new Generator();
// generator.generate();
// console.log(generator.martrix);
