function tic(){
    document.getElementById("ticket1").style.animationPlayState="running";
}
function butt(){
    document.getElementById("but1").style.opacity="1";
    document.getElementById("but2").style.opacity="1";
    document.getElementById("but1").style.cursor="pointer";
}
function ptt(){
    document.getElementById("point").style.opacity="1";
}
function rpp(){
    document.getElementById("receipt").style.animationPlayState="running";
}
function bk(){
    document.getElementById("block").style.animationPlayState="running";
}
function app(){
    document.getElementById("receipt").style.opacity="1";
}
function show_ticket(){
    document.getElementById("ticket_content").style.animationPlayState="running";
}

function showti(){
    document.getElementById("tip").style.animationPlayState="running";
}
function mu(){

    document.getElementById("log").style.animationPlayState="running";
}

function qrtip(){
    document.getElementById("tip3").style.animationPlayState="running";
}

function p1(){
    document.getElementById("p1").style.animationPlayState="running";
}
function p2(){
    document.getElementById("p2").style.animationPlayState="running";}
function p3(){
    document.getElementById("p3").style.animationPlayState="running";}
function p4(){
    document.getElementById("p4").style.animationPlayState="running";}


// 直接消失有點突然，還在嘗試使用淡出的動畫讓他們慢慢消失
function hide(){
    document.getElementById("ticket1").style.opacity="0";
    document.getElementById("receipt").style.opacity="0";
    //document.getElementById("block").style.display = "none"; 
    document.getElementById("point").style.opacity="0";
    document.getElementById("point2").style.opacity="0";
    document.getElementById("but1").style.opacity="0";
    document.getElementById("but2").style.opacity="0";

    document.getElementById("vanish").style.opacity="0";
}

function page(){
    document.getElementById("next").style.opacity="1";
}

function po2(){
    document.getElementById("point2").style.opacity="1";
}


//按下"我要取票"，文字框收起來，出現"Ticket"畫面
var click=document.getElementById("nextBtn");
click.onclick=function(){
    document.getElementById("vanish").style.animationPlayState="running";
    document.getElementById("background").style.opacity="0.5";
    document.getElementById("nextBtn").style.opacity="0";
    //setTimeout("bk()",3000);
    setTimeout("tic()",3500);
    setTimeout("butt()",7000);
    setTimeout("ptt()",7000);
    setTimeout("app()",9000);

}
//按下搖桿，開始播放出票動畫
var buttclick=document.getElementById("but1");
buttclick.onclick=function(){
    document.getElementById("but1").style.transform="rotate(320deg)";
    document.getElementById("but1").style.webkitTransform="rotate(320deg)";
    document.getElementById("point").style.opacity="0";
    document.getElementById("but1").style.cursor="default";
    setTimeout("rpp()",1000);
    setTimeout("po2()",9000);
}

//按下Ticket的圖案，背後的東西隱藏，呈現出車票內容
var ticket_click = document.getElementById("receipt");
ticket_click.onclick = function(){
    setTimeout("hide()",100);
    setTimeout("show_ticket()",100);
    setTimeout("showti()",3000);


}

var back=document.getElementById("ticket_content");
back.onclick=function(){
    document.getElementById("logo2").style.animationPlayState="running";
    document.getElementById("content").style.animationPlayState="running";
    document.getElementById("ticket_content").style.cursor="default";
    setTimeout("p1()",3500);
    setTimeout("p2()",5000);
    setTimeout("p3()",7000);
    setTimeout("p4()",9000);
    setTimeout("cc()",10000);
    setTimeout("mu()",15000);
    setTimeout("qrtip()",17500);
    setTimeout("page()",18500);
    document.getElementById("tip").style.color="transparent";
   

}

var link=document.getElementById("log");
link.onclick=function(){
    document.getElementById("log").style.cursor="default";
    document.getElementById("log").style.webkitFilter="brightness(0%)";
    document.getElementById("tip3").style.color="transparent";

    document.getElementById("music").style.zIndex="600";
    document.getElementById("music").style.animationPlayState="running";

}