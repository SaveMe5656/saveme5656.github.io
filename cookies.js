function saveCookie(name, value, path, duration) {
	if (value === undefined) {
		console.error("Error: value parameter is undefined");
		return;
	}
	let nameURI = encodeURIComponent(name),
		valueURI = encodeURIComponent(value);
	let sentCookie = nameURI + "=" + valueURI;
	duration === undefined || (sentCookie += ";expires=" + new Date(duration).toUTCString());
	path === undefined || (sentCookie += ";path=" + path);
	document.cookie = sentCookie;
	return sentCookie;
}

function loadCookie(name) {
	if (name !== undefined) {
		let cookies = document.cookie.split("; ");
		for (let i in cookies) {
			if (cookies[i].substring(0, name.length + 1) == encodeURIComponent(name) + "=")
				return decodeURIComponent(cookies[i].substring(name.length + 1));
		}
		console.warn("Warn: loaded cookie is undefined");
	} else console.error("Error: name parameter is undefined");
}

function deleteCookie(name, path) {
	if (name !== undefined) {
		let deletedCookie = encodeURIComponent(name) + "=;expires=" + new Date(Date.now() - 1).toUTCString();
		path === undefined || (deletedCookie += ";path=" + path);
		document.cookie = deletedCookie;
	} else console.error("Error: name parameter is undefined");
}
