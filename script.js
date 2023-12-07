function showTime() {
	document.getElementById('currentTime').innerHTML = new Date().toUTCString();
}
showTime();
setInterval(function () {
	showTime();
}, 1000);
const signature = document.createElement("p");
signature.innerHTML = "Created by [FIIFS]";
document.body.appendChild(signature);
