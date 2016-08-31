var doc = document;
function showboxshadow() {
    var navbar = doc.getElementById('de-top');
    window.addEventListener("scroll", function() {
        var boxOntop = document.documentElement.scrollTop || document.body.scrollTop;
        if (boxOntop == 0) {
            navbar.style.boxShadow = "none";
        } else {
            navbar.style.boxShadow = "0px 2px 10px #888888";
            
        }

    });
}

function toTop() {
    var timer = null;
    var clientHeight = document.documentElement.clientHeight;
    var obtn = document.getElementById('de-btn');
    var isTop = true;
    window.addEventListener("scroll", function() {
        var osTop = document.documentElement.scrollTop || document.body.scrollTop;
        if (osTop >= 100) {
            obtn.style.display = "block";
        } else {
            obtn.style.display = "none";
        }
        if (!isTop) {
            clearInterval(timer);
        }
        isTop = false;
    });
    obtn.onclick = function() {

        timer = setInterval(function() {
            var osTop = document.documentElement.scrollTop || document.body.scrollTop;
            var variables = Math.floor(-osTop / 8);
            document.documentElement.scrollTop = document.body.scrollTop += variables;
            isTop = true;
            if (osTop == 0) {
                clearInterval(timer);
            }

        }, 20);
    }
}

function getrandom(){
	
	var wan=Math.floor(Math.random()*10);
	var imgarray=[1,2,3,4,5,6,7,8,9];
	var img=document.getElementById("bgimg");
	if(wan>=0&&wan<=8)
    {
	img.setAttribute("src","/../image/image"+imgarray[wan]+".jpg");
  }
     else
     {
     	wan=5;
     	img.setAttribute("src","/../image/image"+imgarray[wan]+".jpg");
     }
    
}

getrandom();
showboxshadow();
