
const PopupNumbers=require("./ui/popupnumbers");
const Grid=require("./ui/Grid");
const grid=new Grid($("#container"));




 const popupNumbers=new PopupNumbers($("#popupNumbers"));
 grid.bindPopup(popupNumbers);

//  按钮进行事件绑定
$("#check").on("click",e=>{
  if(grid.check()){
    alert("Sucess!");
  }
});
$("#reset").on("click",e=>{
  grid.reset();
});
$("#clear").on("click",e=>{
  grid.clear();
});

$("#rebuild").on("click",e=>{
  console.log("!!!!");
  //fun();
   location.reload() 
  // grid._$container.empty();
  // grid=new Grid($("#container"));
});