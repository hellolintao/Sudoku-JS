// 处理弹出的操作面板

module.exports=class PopupNumbers{
    constructor($panel){
        this._$panel=$panel.hide().removeClass("hidden");
        this._$panel.on("click","span",e=>{
            const $cell=this._targetcell;
            const $span=$(e.target);
            
            // mark  回填样式
            if($span.hasClass("mark1")){
                if($cell.hasClass("mark1")){
                    $cell.removeClass("mark1");
                }else{
                    $cell.removeClass("mark2")
                        .addClass("mark1");
                }
            }else if($span.hasClass("mark2")){
                if($cell.hasClass("mark2")){
                    $cell.removeClass("mark2");
                }else{
                    $cell.removeClass("mark1")
                        .addClass("mark2");
                }
            }else if($span.hasClass("empty")){
                // 取消数字和mark
                $cell.removeClass("mark1").removeClass("mark2");
                $cell.text(0).addClass("empty");
            }else{
                $cell.removeClass("empty").text($span.text());
                // 1-9  填写数字
            }
            this.hide();
            
        });
    }
    popup($cell){
        this._targetcell=$cell;
        const {left,top}=$cell.position();
        let temp=$(window).width();
        let temp2=temp-temp/5.5;
        if(left>temp2){
            this._$panel
            .css({
                left:`${temp-temp/5.5-120}px`,
                top:`${top-60}px`
            }).show();
        }else{
            this._$panel
            .css({
                left:`${left-60}px`,
                top:`${top-60}px`
            }).show();
        }
        
    }
    hide(){
        this._$panel.hide();
    }
}
