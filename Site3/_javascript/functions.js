function iconesIn(a){
	var icone = document.getElementById("icon_" + a);
	icone.src = "../_imagens/_icones/icon_"+a+"2.png";
}
function iconesOut(a){
	var icone = document.getElementById("icon_" + a);
	icone.src = "../_imagens/_icones/icon_"+a+".png";
}
function arrowGo(){
	var ancora = window.location.href.split("#")[1];

	if(ancora) {
		if(ancora == "1"){
			ancora = "2";
		}else if(ancora == "2"){
			ancora = "3";
		}else{
			ancora = "1";
		}
	}
	window.location.href= "#" + ancora;
}
function arrowBack(){
	var ancora = window.location.href.split("#")[1];

	if(ancora) {
		if(ancora == "3"){
			ancora = "2";
		}else if(ancora == "2"){
			ancora = "1";
		}else{
			ancora = "3";
		}
	}
	window.location.href= "#" + ancora;
}
window.onload = function(){
	var arrowWidth = document.getElementById('menuLat').offsetWidth;
	document.getElementById("menuLat").style.right= -arrowWidth + "px";
}
function slideArrow(){
	var arrowWidth = document.getElementById('menuLat').offsetWidth;
	document.getElementById("menuLat").style.transition = "all 1s";
	document.getElementById("menuLat").style.right= 0;
}

function slideArrowOut(){
	var arrowWidth = document.getElementById('menuLat').offsetWidth;
	document.getElementById("menuLat").style.right= -arrowWidth + "px";
}
