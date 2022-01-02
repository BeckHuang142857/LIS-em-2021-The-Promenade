var ap=document.getElementById("bt");
 ap.onclick=function(){
    document.getElementById("s1").style.animationPlayState="running";
    document.getElementById("sp").style.animationPlayState="running";
     document.getElementById("s2").style.animationPlayState="running";
     document.getElementById("s2").style.zIndex="12";

}



var choice=0;

var option1=document.getElementById('option1');
option1.onclick=function(){
    document.getElementById("option").style.opacity="0";
    document.getElementById("sp").style.opacity="0";
    document.getElementById("s3").style.animationPlayState="running";
    document.getElementById("background").style.webkitFilter="grayscale(0%)";
    document.getElementById("s3").style.zIndex="13"; 
    document.getElementById("btt").style.animationPlayState="running";
   };

var option2=document.getElementById('option2');
option2.onclick=function(){
    document.getElementById("option").style.opacity="0";
    document.getElementById("sp").style.opacity="0";
    document.getElementById("s3").style.animationPlayState="running";
    document.getElementById("background").style.webkitFilter="grayscale(0%)";
    document.getElementById("s3").style.zIndex="13";
    document.getElementById("btt").style.animationPlayState="running";
    };

var option3=document.getElementById('option3');
option3.onclick=function(){
        document.getElementById("option").style.opacity="0";
    document.getElementById("sp").style.opacity="0";
    document.getElementById("s3").style.animationPlayState="running";
    document.getElementById("background").style.webkitFilter="grayscale(0%)";
    document.getElementById("s3").style.zIndex="13";
    document.getElementById("btt").style.animationPlayState="running";
    };
    

/*還沒處理動畫後的下一頁*/