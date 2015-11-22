var flag = 0;
document.getElementById('menuButton').onclick = function(evt) {
	handle();
}
function hidebar () {
	document.getElementById('mask').style.display = "none";
	document.getElementById('menu').style.display = "none";
	document.getElementById('main').style.webkitTransform = "";
	document.getElementById('main').style.boxShadow = "";
	document.getElementById('main').style.overflow = "";
	document.getElementById('main').style.overflowX = "hidden";

}
function showBar () {
	document.getElementById('mask').style.transition = "all 1s";
	document.getElementById('mask').style.display = "block";
	document.getElementById('menu').style.display = "block";
    document.getElementById('main').style.transition = "all 0.3s";
    document.getElementById('main').style.webkitTransform = "translate(70vw,13.5vw)";
    document.getElementById('main').style.boxShadow = "0px 0px 10px #888888";
    document.getElementById('main').style.overflow = "hidden";
}

function handle () {
    flag = !flag;
    flag==0 ? hidebar() : showBar();
}
