function saveCookie(name, value, duration, path) {
	let nameURI = encodeURIComponent(name),
		valueURI = encodeURIComponent(value);
	duration || (duration = 1), path || (path = "/"), document.cookie = nameURI + "=" + valueURI + ";expires=" + new Date(Date.now() + 2592e6 * duration).toUTCString() + ";path=" + path
}

function loadCookie(name) {
	let cookies = document.cookie.split("; ");
	for (let i in cookies) {
		let t = decodeURIComponent(cookies[i]);
		if (t.substring(0, name.length + 1) == name + "=") return t(name.length + 1)
	}
}

function deleteCookie(name, path) {
	let nameURI = encodeURIComponent(name);
	path || (path = "/"), document.cookie = nameURI + "=;expires=" + new Date(Date.now() - 1).toUTCString() + ";path=" + path
}