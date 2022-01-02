var tabs_menu = document.getElementsByClassName("tabs");

for (var k = 0; k < tabs_menu.length; k++) {
        tabs_menu[k].onclick = js_tabs;
    }

function js_tabs() {
    var tab_id = this.getAttribute("data-target");
    var tabs_panel = document.getElementsByClassName("block");

    for (var i = 0; i < tabs_panel.length; i++) {
            tabs_panel[i].style.display = "none";
    }
    
    for (var j = 0; j < tabs_menu.length; j++) {
            tabs_menu[j].className = tabs_menu[j].className.replace(" tabs_active", "");
    }
    
    this.className += " tabs_active";
    document.getElementById(tab_id).style.display = "block";
    return false;
}

function dis(){
        document.getElementById("anima").style.zIndex="-300";
}



var click=document.getElementById("play");
click.onclick=function(){
        document.getElementById("play").style.zIndex="-300";
        document.getElementById("warn").style.zIndex="-300";
        document.getElementById("anima").style.animationPlayState="running";
        document.getElementById("en").style.animationPlayState="running";
        document.getElementById("w1").style.animationPlayState="running";
        document.getElementById("w2").style.animationPlayState="running";
        document.getElementById("w3").style.animationPlayState="running";
        document.getElementById("w4").style.animationPlayState="running";
        setTimeout("dis()", 14000);
}