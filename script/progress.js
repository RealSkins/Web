function progress(){
	var newelement = document.createElement("div");
	document.body.appendChild(newelement);
	newelement.setAttribute("class", "progress");
	newelement.setAttribute("id", "progress");
	var total = document.documentElement.scrollHeight - document.documentElement.clientHeight;
	document.addEventListener("scroll", () => 
		document.getElementById("progress").style.width = ((document.documentElement.scrollTop / total) * 100).toFixed(1) + '%');
}

function progressInit(){
	progress();
}