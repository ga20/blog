var doc= document;
window.addEventListener("load",function(){
	var contentli=doc.querySelectorAll(".post-list li");
	  var i;
    for(i in contentli){
	   contentli[i].onmousover=function(){this.cssText="color:#00BFFF";};
       contentli[i].onmousout=function(){this.cssText="color:#3CB371";};
   }
});

function toTop(){
	    var timer=null;
	    var clientHeight=document.documentElement.clientHeight;
		var obtn=document.getElementById('re-btn');
		var isTop=true;
		window.addEventListener("scroll",function(){
			var osTop=document.documentElement.scrollTop||document.body.scrollTop;
			if(osTop>=100)
				{
					obtn.style.display="block";
				}
				else{
					obtn.style.display="none";
				}
			if(!isTop){
				clearInterval(timer);
			}
			isTop=false;
		});
		obtn.onclick=function () {
        
		    timer=setInterval(function(){
			var osTop=document.documentElement.scrollTop||document.body.scrollTop;
			var variables=Math.floor(-osTop/8);
			document.documentElement.scrollTop=document.body.scrollTop+=variables;
			isTop=true;
			if(osTop==0){
		  		clearInterval(timer);
		  	}
		  	
		   },20);
  }
}
