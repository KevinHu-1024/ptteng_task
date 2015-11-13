var flag = 0;
document.getElementById('menuButton').onclick = function(evt) {
	handle();
}
function hidebar () {
	document.getElementById('mask').style.display = "none";
	document.getElementById('menu').style.display = "none";
	document.getElementById('main').style.transform = "";
}
function showBar () {
	document.getElementById('mask').style.transition = "all 1s";
	document.getElementById('menu').style.display = "block";
    document.getElementById('main').style.transition = "all 0.3s";
    document.getElementById('main').style.transform = "translate(70vw,13.5vw)";
    document.getElementById('mask').style.display = "block";

}

function handle () {
    flag = !flag;
    flag==0 ? hidebar() : showBar();
}
