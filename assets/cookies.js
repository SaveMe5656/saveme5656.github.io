/**
 * Saves a cookie by updating `document.cookie`.
 * @param {string} name name of cookie
 * @param {*} value value to save
 * @param {string} [path] path of site directory to save to
 * @param {string | Number | Date} [duration] when cookie should be auto-deleted by the browser
 * @returns {string} built string used to update `document.cookie`
 */
function saveCookie(name, value, path, duration) {
	const funcTestPropObj = { name, value };
	for (let i in funcTestPropObj)
		if (funcTestPropObj[i] === undefined) {
			console.error(Error(i + " parameter not specified"));
			return;
		}
	const nameURI = encodeURIComponent(name),
		valueURI = encodeURIComponent(value);
	let sentCookie = nameURI + "=" + valueURI;
	duration === undefined || (sentCookie += ";expires=" + new Date(duration).toUTCString());
	path === undefined || (sentCookie += ";path=" + path);
	document.cookie = sentCookie;
	return sentCookie;
}

/**
 * Loads a cookie's string value from `document.cookie`.
 * @param {string} name name of cookie to load
 * @returns {string | undefined} value of cookie as string or `undefined`  
 * a warning is logged if cookie is undefined
 */
function loadCookie(name) {
	if (name !== undefined) {
		let cookies = document.cookie.split("; ");
		for (let i in cookies) {
			if (cookies[i].substring(0, name.length + 1) == encodeURIComponent(name) + "=")
				return decodeURIComponent(cookies[i].substring(name.length + 1));
		}
		console.warn("Loaded cookie is undefined");
	} else console.error(Error("name parameter not specified"));
}

/**
 * Deletes a cookie by updating `document.cookie`.
 * @param {string} name cookie name
 * @param {string} [path] path cookie is located at
 * @returns {boolean} success state (`true` if successful)
 */
function deleteCookie(name, path) {
	if (name !== undefined) {
		const tempCookie = loadCookie(name)
		if (!tempCookie) {
			console.error(Error("cookie not accessable"));
			return false;
		}
		let deletedCookie = encodeURIComponent(name) + "=;expires=" + new Date(Date.now() - 1).toUTCString();
		path === undefined || (deletedCookie += ";path=" + path);
		document.cookie = deletedCookie;
		if (loadCookie(name) == tempCookie) {
			console.error(Error("cookie not deleted (is the correct path specified?)"));
			return false;
		}
		else return true;
	} else console.error(Error("name parameter not specified"));
}
