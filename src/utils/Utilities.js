export default class Utilities {
	static constructScript(src, inHead=true) {
		const parent = inHead ? document.head : document.body;
		let script = document.createElement('script');
		script.src = src;
		document.head.appendChild(script);
	}
	static getDateString() {
		let date = new Date();
		let year = date.getFullYear();
		let month = date.getMonth();
		let day = date.getDate();
		month = month.length === 2 ? month : '0' + month;
		day = day.length === 2 ? day : '0' + day;
		return `${year}-${month}-${day}`
	}
}