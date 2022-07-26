
var menuToggle =$(".menu-container");


$(".menu").on("click",function(){
  menuToggle.show();
})
$(".close-menu").on("click",function(){
  menuToggle.hide();
  arrowUpC.hide();
  arrowDownC.show();
  listCompany.hide();
  arrowUpF.hide();
  arrowDownF.show();
  listFeatures.hide();
})

var arrowDownF=$(".arrow-down-features");
var arrowUpF=$(".arrow-up-features");
var listFeatures = $("#features");

var arrowDownC=$(".arrow-down-Company");
var arrowUpC=$(".arrow-up-Company");
var listCompany = $("#company");
arrowDownF.on("click",function (){
  arrowDownF.hide();
  arrowUpF.show();
  listFeatures.show();
})
arrowDownC.on("click",function (){
  arrowDownC.hide();
  arrowUpC.show();
listCompany.show();
})

arrowUpF.on("click",function (){
  arrowUpF.hide();
  arrowDownF.show();
  listFeatures.hide();
})
arrowUpC.on("click",function (){
  arrowUpC.hide();
  arrowDownC.show();
  listCompany.hide();
})
