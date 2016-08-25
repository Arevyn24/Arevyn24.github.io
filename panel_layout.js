/*
 * Function takes panels on page and sets them to the fill the entire screen
 * Number of colors provided must match number of sections 
 */
function createPanels(colors) {
	var width = window.innerWidth + "px";
	var height = window.innerHeight + "px";
	
	var sections = document.getElementsByTagName("section");
	for (var i = 0; i < sections.length; i++) {
			sections[i].style.backgroundColor = colors[i];
	}
}

var colors = ["#BEE9E8", "#62B6CB", "#1B4965", "#62B6CB"];
window.onload = createPanels(colors);