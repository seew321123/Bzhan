window.onload=function(){
	document.getElementById("menu16").onmouseover=function(){
		document.getElementById("img16").src="蓝手机端.png"
	};
	
	document.getElementById("menu16").onmouseout=function(){
		document.getElementById("img16").src="灰手机端.png";
	};
var n = 1;
	setInterval(function()
	{
		if(n < 5){
			n++;
			document.getElementsByTagName("input")[n].checked = "checked";
		}
		else{
			n = 1;
			document.getElementsByTagName("input")[n].checked = "checked";
		};		
	}
	,3000);

  
 for(var i = 1; i < 6; i++){
    var input = document.getElementsByTagName('input')[i];
    input.index = i;
    input.onclick = function() {
        n = this.index;
    };
}
        
window.onscroll=function(){
    var nav=document.getElementById("opacity");
	var Top=document.body.scrollTop;
	if(Top > 100){
		nav.className="show";
	}
	else{
		nav.className="";
	}
};
		
};
	
