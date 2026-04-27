function loadStylesheet(path) {
	let element = document.createElement("link");
	element.rel = "stylesheet";
	element.href = path;
	document.head.appendChild(element);
	return element;
}

loadStylesheet("/assets/style.css");
loadStylesheet("/assets/fonts/Aller.css");
