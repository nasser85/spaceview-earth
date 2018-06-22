export default class Utilities {
	static constructScript(src, inHead=true) {
		const parent = inHead ? document.head : document.body;
		let script = document.createElement('script');
		script.src = src;
		document.head.appendChild(script);
	}
}