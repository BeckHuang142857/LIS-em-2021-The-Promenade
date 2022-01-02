function card(){
    document.getElementById("ingri").style.animationPlayState="running";
    document.getElementById("sen").style.animationPlayState="running";
    document.getElementById("altt").style.animationPlayState="running";
    document.getElementById("date").style.animationPlayState="running";
    document.getElementById("nextBtn2").style.animationPlayState="running";
    document.getElementById("nextBtn2").style.zIndex="10";
}
document.onkeydown=function(e){    //對整個頁面監聽  

    var keyNum=window.event ? e.keyCode :e.which;       //獲取被按下的鍵值  

    //判斷如果使用者按下了空格鍵(keycode=32)，  
    if(keyNum==39){  
        document.getElementById("bk3").style.opacity="0";
        document.getElementById("chat3").style.opacity="0";
        document.getElementById("tip").style.color="black";
        document.getElementById("hr").style.opacity="0";
        document.getElementById("tt").style.color="transparent";
        document.getElementById("tb").style.animationPlayState="running";
        setTimeout("card()",3000);
    }  
    
    }


function animas(){        
document.getElementById("wh").style.opacity="1";
document.getElementById("bk").style.opacity="1";
document.getElementById("chat1").style.color="white";
document.getElementById("wh").style.animationPlayState="running";
}

function ani1(){
    document.getElementById("bk").style.animationPlayState="running";
    }
function ani2(){
    document.getElementById("bk2").style.animationPlayState="running";
    }
function ani3(){
    document.getElementById("bk3").style.animationPlayState="running";
    }
function Bt1(){
    document.getElementById("Btn1").style.opacity="1";
}

function bkk3(){
    document.getElementById("bk3").style.opacity="0";
}

function final(){
    document.getElementById("chat2").style.color="transparent";
    document.getElementById("chat3").style.color="white";
    document.getElementById("bk2").style.opacity="0";
    document.getElementById("bk3").style.opacity="1";

    document.getElementById("wh2").style.opacity="0";
    document.getElementById("wh3").style.opacity="1";
    setTimeout("ani3()",1000);
}

function tipp(){
    document.getElementById("tip").style.animationPlayState="running";
}


var next=document.getElementById('nextBtn1');
    nextBtn1.onclick=function(){
        document.getElementById("vanish").style.animationPlayState="running";
        document.getElementById("nextBtn1").style.animationPlayState="running";
        document.getElementById("tb").style.backgroundColor="black";

        setTimeout("animas()",3500);
        setTimeout("ani1()",5000);
        setTimeout("Bt1()",13000);
    }

var next1=document.getElementById('Btn1');
    next1.onclick=function(){
        document.getElementById("Btn1").style.opacity="0";
        document.getElementById("chat1").style.color="transparent";
        document.getElementById("chat2").style.color="white";

        document.getElementById("bk").style.opacity="0";
        document.getElementById("bk2").style.opacity="1";

        document.getElementById("wh").style.opacity="0";
        document.getElementById("wh2").style.opacity="1";

        setTimeout("ani2()",2000);

        setTimeout("final()",13000);
        setTimeout("tipp()",23000);
        setTimeout("bkk3()",23000);
    }




/*
    var next1=document.getElementById("Btn1");
    nextBtn.onclick=function(){
        document.getElementById("chat1").style.color="transparent";
        document.getElementById("chat2").style.color="white";
    }

*/
