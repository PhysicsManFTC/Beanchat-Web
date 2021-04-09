var messages = document.getElementById("messages");

var msgInput = document.getElementById("msgInput");

var url = "https://api.isaacthoman.me/api/App";

function Messages(msg) {
	if (!!msg) messages.innerHTML = msg;
	return messages.innerHTML;
}

async function Send() {
	var msg = msgInput.value;
	if (msg === "") return;
	msgInput.value = "";
	try{
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function () {
		if (this.readyState === 4 && this.status === 200) {
			Refresh();
		}
	};
	xhttp.open("POST", `${url}?message=${msg}`, true);
	xhttp.send();
}catch(e){Messages(`HTTPS-ERROR ${e}`);}
}

document.getElementById("send").onclick = function () {
	Send();
};

async function Refresh() {
	try{
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function () {
		if (this.readyState === 4 && this.status === 200) {
			Messages(this.responseText);
		}
	};
	xhttp.open("GET", "url", true);
	xhttp.send();
}catch(e){Messages(`HTTPS-ERROR ${e}`);}
}

document.getElementById("refresh").onclick = function () {
	Refresh();
};
