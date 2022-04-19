setTimeout(function(){
            $('.loading').fadeToggle();
        }, 2000); 
 
 
function aftertoggle(){
	var top = document.getElementById("top");
 
   var center = document.getElementById("center");
   var bottom = document.getElementById("bottom");
	var holder = document.getElementById("holder");
   
    
 
	top.classList.toggle("aftertop");
	center.classList.toggle("aftercenter");
	bottom.classList.toggle("afterbottom");
	holder.classList.toggle("afterholder");
}






function darkenable(){
	
	var darkenable = document.getElementById("darkenable");
	var afterenable = document.getElementById("afterenable");
	var optionsDark = document.getElementById("optionsDark");
  var html = document.getElementById("html");
  var AboutRadium = document.getElementById("AboutRadium");


	afterenable.classList.toggle("afterenable");
	darkenable.classList.toggle("enable") ;
  html.classList.toggle("darkHTML");
	AboutRadium.classList.toggle("afterAboutRadium");
	
alert("These Feature Is Not Fully Useable Right Now.Please Wait For The Next Update🙂")
}

function hover1(){
	
	var hovermenu1 = document.getElementById("hovermenu1");

	
	hovermenu1.classList.toggle("afterhover")
	holder.classList.toggle("holderAfterHover1")
}



