var choice=0;

var option1=document.getElementById('option1');
option1.onclick=function(){
        choice=1;
    };

var option2=document.getElementById('option2');
option2.onclick=function(){
        choice=2;
    };

var option3=document.getElementById('option3');
option3.onclick=function(){
        choice=3;
    };

    var next=document.getElementById('nextBtn');
    nextBtn.onclick=function(){
        if(choice===1){
            location.href = "page2-1.html";
        }else if(choice===2){
            location.href = "page2-2.html";
        }else if(choice===3){
            location.href = "page2-3.html";
        }else{
            alert('選一個嘛！');
        };
    };
    