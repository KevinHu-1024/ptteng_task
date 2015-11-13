var flag = 0;
document.getElementById('menuButton').onclick = function(evt) {
	handle();
}
function hidebar () {
	document.getElementById('mask').style.display = "none";
	document.getElementById('menu').style.display = "none";
	document.getElementById('main').style.transform = "";
	document.getElementById('main').style.boxShadow = "";

}
function showBar () {
	document.getElementById('mask').style.transition = "all 1s";
	document.getElementById('mask').style.display = "block";
	document.getElementById('menu').style.display = "block";
    document.getElementById('main').style.transition = "all 0.3s";
    document.getElementById('main').style.transform = "translate(70vw,13.5vw)";
    document.getElementById('main').style.boxShadow = "0px 0px 10px #888888";
}

function handle () {
    flag = !flag;
    flag==0 ? hidebar() : showBar();
}
