function showContact() {
	var bar = document.getElementById("contact");
	var text = document.getElementById("text");
	var list = document.getElementById("contactList");
	bar.style.transition = "all .7s";
	text.style.transition = "all 1s";
	list.style.transition = "all 1.2s";
	bar.style.background = "none";
	bar.style.backgroundColor = "#62B6CB";
	text.style.display = "none";
	list.style.display = "inline";
	
}

function hideContact() {
	var bar = document.getElementById("contact");
	var text = document.getElementById("text");
	var list = document.getElementById("contactList");
	bar.style.transition = "all .7s";
	text.style.transition = "all 2s";
	list.style.transition = "all 1s";
	bar.style.backgroundColor = "#1B4965";
	text.style.display = "inline";
	list.style.display = "none";
}