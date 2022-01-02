var choice=0;

var option1=document.getElementById('option1');
option1.onclick=function(){
        choice=1;
    };

var option2=document.getElementById('option2');
option2.onclick=function(){
        choice=2;
    };

function bus1(){
    document.getElementById("ani1").style.opacity="1";     
}
function bus2(){
    document.getElementById("ani1").style.animationPlayState="running";
}
function click1(){
    document.getElementById("click1").style.opacity="1";
    document.getElementById("click1").style.zIndex="10";
}


function click2(){
    document.getElementById("click2").style.opacity="1";
    document.getElementById("click2").style.zIndex="10";
}

function walk1(){
    document.getElementById("ani3").style.opacity="1";     
}
function walk2(){
    document.getElementById("ani3").style.animationPlayState="running";
}


    /*
function bus2(){
    document.getElementById("ani1").style.animationPlayState=" running",5000;}

*/

var next=document.getElementById('nextBtn');
    nextBtn.onclick=function(){
        if(choice===1){
        /*textblock button disapper*/    
        document.getElementById("tb").style.animationPlayState="running";
        document.getElementById("nextBtn").style.animationPlayState="running";
        document.getElementById("click1").disabled="";

         /*wait 5s and start ani let the bus runs first to avoid pic not in the center*/ 
         /*brightness*/
        var x=1;
        var btt = setInterval(bk, 700);
        function bk(){
            if (x<=0.3){clearInterval(btt);
            }
            else{
            document.getElementById("background").style.opacity=x;
            x-=0.03;
            }
            }
         setTimeout("bk()",4500);
         setTimeout("bus1()",4500);
         setTimeout("bus2()",3500);
         setTimeout("click1()",20500);

        }

        
        else if(choice===2){
        /*textblock button disapper*/    
        document.getElementById("tb").style.animationPlayState="running";
        document.getElementById("nextBtn").style.animationPlayState="running";
        document.getElementById("click2").disabled="";
                 /*wait 5s and start anii*/
        var x=1;
        var btt = setInterval(bk, 700);
         function bk(){   
         if (x<=0.3){clearInterval(btt);
         }
         else{
         document.getElementById("background").style.opacity=x;
         x-=0.03;
         }
         }
         setTimeout("bk()",4500);
         setTimeout("walk1()",4500);
         setTimeout("walk2()",3500);
         setTimeout("click2()",22000);

        }

        else{
            alert('選一個嘛！');
        };
    };

    