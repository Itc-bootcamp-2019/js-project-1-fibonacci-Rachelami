function myFunction() {
	let useInput = document.getElementById("myText").value;
	if (useInput > 50) {
		document.getElementById("whenLoad").innerHTML = "ERROR!";
	} else if (useInput == 42) {
		document.getElementById("error").innerHTML =
			"Server Error: 42 is the meaning of life";
	} else {
		const whenLoad = document.getElementById("whenLoad");
		whenLoad.innerHTML = `
	<div class="loader"></div>
     `;
		let url = "http://localhost:5050/fibonacci/";
		url = url + useInput;
		fetch(url)
			.then(response => response.json())
			.then(data => {
				console.log(data.number);
				console.log(data.result);
				console.log(data);
				document.getElementById("y").innerText = data.result;
			});
	}
}
