class EmojiImg {
	/** @param {HTMLUnknownElement} target - `<emoji-img>` to convert to `<img>` */
	static convertElement(target) {
		const value = target.getAttribute("value"),
			data = target.getAttribute("data"),
			src = target.getAttribute("src") && JSON.stringify(target.getAttribute("src")),
			emojiElement = new Image;

		emojiElement.className = "emoji";

		if (!value) {
			const unicodeArray = data.split("-");
			emojiElement.alt = "";
			unicodeArray.forEach((charEntry) => emojiElement.alt += String.fromCodePoint(parseInt(charEntry, 16)));
		}
		else value && (emojiElement.alt = value);

		const location = src && src.location || "https://cdn.jsdelivr.net/gh/jdecked/twemoji@latest/assets/svg/",
			suffix = src && src.suffix || ".svg";
		emojiElement.src = location + data.toLowerCase() + suffix;

		target.replaceWith(emojiElement);

		return emojiElement;
	}

	static convertPage() {
		for (let i of document.querySelectorAll("emoji-img"))
			this.convertElement(i);
	}

	static style = document.head.appendChild(document.createElement("style"));;

	constructor(data, src, value) {
		const dummy = document.createElement("emoji-img");

		dummy.setAttribute("data", data);
		if (src) {
			typeof src == "object" ? dummy.setAttribute("src", src) : value = src;
			value && dummy.setAttribute("value", value);
		}

		return EmojiImg.convertElement(dummy);
	}
}

EmojiImg.style.id = "emoji-img";
EmojiImg.style.innerHTML = ".emoji,.icon{vertical-align:center}.emoji{height:1em}.icon{height:calc(1em - 2px);border:1px solid #000;border-color:light-dark(#000,#fff)}";
