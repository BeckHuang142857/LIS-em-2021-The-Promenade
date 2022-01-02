function ape(){
    document.getElementById("cir").style.opacity="1";
    document.getElementById("op").style.opacity="1";
    document.getElementById("blk").style.opacity="1";
    document.getElementById("on").style.opacity="1";
    document.getElementById("nf").style.opacity="1";
    document.getElementById("of").style.opacity="1";
}




var click=document.getElementById("nextBtn");
click.onclick=function(){
    document.getElementById("tb").style.animationPlayState="running";
    document.getElementById("nextBtn").style.animationPlayState="running";
    document.getElementById("hr").style.opacity="0";
    setTimeout("ape()",3500);



    
}

var click=document.getElementById("op");
click.onclick=function(){
    document.getElementById("yt").style.zIndex="90";
    document.getElementById("op").style.rotate="-90deg";
    document.getElementById("yt").style.animationPlayState="running";
    document.getElementById("on").style.color="white";
    document.getElementById("of").style.color="grey";
    document.getElementById("nextBtn2").style.animationPlayState="running";
    
}