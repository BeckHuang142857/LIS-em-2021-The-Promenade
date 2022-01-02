var next=document.getElementById('nextBtn');
    next.onclick=function(){
            location.href = "endpage.html";
        };

function app(){
    document.getElementById("start").style.zIndex="300";
}        

setTimeout("app()",4000);

/* zindex還沒出來*/ 
/*
    var choice=0;

var option1=document.getElementById('option1');
option1.onclick=function(){
        choice=1;
    };

var option2=document.getElementById('option2');
option2.onclick=function(){
        choice=2;
    };


    var next=document.getElementById('nextBtn');
    nextBtn.onclick=function(){
        if(choice===1){
            location.href = "page1.html";
        }else if(choice===2){
            location.href = "page2.html";
        }else{
            alert('選一個嘛！');
        };
    };
    */