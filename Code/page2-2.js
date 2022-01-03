var can1=document.getElementById("can");
 can1.onclick=function(){
    document.getElementById("big").style.opacity="0";
    document.getElementById("can").style.cursor="default";
    document.getElementById("can").style.animationPlayState="running";
    document.getElementById("h41").style.animationPlayState="running";
    document.getElementById("fd").style.animationPlayState="running";
    document.getElementById("noodle").style.opacity="0";
    setTimeout("m2()",18000);
    setTimeout("bt2()",20000);
}

var noodle1=document.getElementById("noodle");
 noodle1.onclick=function(){
    document.getElementById("big").style.opacity="0";
    document.getElementById("noodle").style.cursor="default";
    document.getElementById("noodle").style.animationPlayState="running";
    document.getElementById("h41").style.animationPlayState="running";
    document.getElementById("can").style.opacity="0";
    setTimeout("bt2()",5000);
    setTimeout("m3()",4000);
}

function m2(){
    document.getElementById("fd2").style.animationPlayState="running";
}

function m3(){
    document.getElementById("fd3").style.animationPlayState="running";
}

function bt2(){
    document.getElementById("nextBtn2").style.animationPlayState="running";
    document.getElementById("nextBtn2").style.zIndex="12";
}
/*

var choice=0;

var option1=document.getElementById('can');
option1.onclick=function(){
        choice=1;
    };

var option2=document.getElementById('noodle');
option2.onclick=function(){
        choice=2;
    };




var next=document.getElementById('nextBtn');
    nextBtn.onclick=function(){
        if(choice===1){
            document.getElementById("big").style.opacity="0";
            document.getElementById("nextBtn").style.animationPlayState="running";
            document.getElementById("can").style.animationPlayState="running";
            document.getElementById("h41").style.animationPlayState="running";
            document.getElementById("fd").style.animationPlayState="running";
            document.getElementById("noodle").style.opacity="0";
            setTimeout("m2()",18000);
            setTimeout("bt2()",20000);


        }else if(choice===2){
            document.getElementById("big").style.opacity="0";
            document.getElementById("nextBtn").style.animationPlayState="running";
            document.getElementById("noodle").style.animationPlayState="running";
            document.getElementById("h41").style.animationPlayState="running";
            document.getElementById("can").style.opacity="0";
            setTimeout("bt2()",5000);
            setTimeout("m3()",4000);
        }else{
            alert('選一個嘛！');
        };
    };
*/
    var next2=document.getElementById('nextBtn2');
    nextBtn2.onclick=function(){
        location.href = "prendpage2-2.html";
    };
