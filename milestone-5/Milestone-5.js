function fibofun() {
	let error50 = document.getElementById("error50");
	let myText = document.getElementById("myText");
	let y = document.getElementById("y");
	y.innerHTML =
		'<div id="spinner"></div>' +
		'<div id="error"></div>' +
		'<div id="error42"></div>';
	error50.classList.add("none");
	myText.classList.remove("input-style-error");

	let useInput = myText.value;
	if (useInput > 50) {
		error50.classList.remove("none");
		error50.innerHTML = "Can't be larger than 50";
		error50.classList.add("error50box");
		myText.classList.add("input-style-error");
	} else {
		let spinner = document.getElementById("spinner");
		spinner.classList.add("spinner-border");

		if (document.getElementById("defaultCheck1").checked == true) {
			let url = `http://localhost:5050/fibonacci/${useInput}`;
			fetch(url).then(response => {
				if (response.ok) {
					return response.json().then(data => {
						console.log(data.number);
						console.log(data.result);
						console.log(data);
						document.getElementById("y").innerText = data.result;
						spinner.classList.remove("spinner-border");
					});
				} else {
					spinner.classList.remove("spinner-border");
					response.text().then(text => {
						console.log(text);
						document.getElementById("error42").innerText =
							"Server Error: " + text;
					});
				}
			});
		} else if (document.getElementById("defaultCheck1").checked == false) {
			function Fibonacci(useInput) {
				let a = 0;
				let b = 1;
				let c = a + b;

				for (i = 1; i < useInput; i++) {
					c = a + b;
					a = b;
					b = c;
				}

				return c;
			}
			document.getElementById("y").innerText = Fibonacci(useInput);
		}
	}
}

function secfibo() {
	let useInput = document.getElementById("myText").value;
	if (useInput != 42 && useInput < 50) {
		let url = "http://localhost:5050/getFibonacciResults";
		console.log(url);
		fetch(url)
			.then(response => response.json())
			.then(data => {
				console.log(data.results);

				for (let a = 0; a <= data.results.length - 1; a++) {
					let allInfo = data.results[a];
					let newArray = [];
					newArray.push(allInfo);
					let d = data.results[a].createdDate;
					new Date(d);
					document.getElementById("alltheInfo").innerHTML +=
						"The Fibonacci of " +
						"<span class='bold'>" +
						allInfo.number +
						"</span>" +
						" is " +
						"<span class='bold'>" +
						allInfo.result +
						"</span>" +
						" Calculated at: " +
						new Date(d) +
						"<hr/>";
				}
			});
	}
}

function DateAsc() {
	document.getElementById("alltheInfo").innerHTML = "";
	let useInput = document.getElementById("myText").value;
	if (useInput != 42 && useInput < 50) {
		let url = "http://localhost:5050/getFibonacciResults";
		console.log(url);
		fetch(url)
			.then(response => response.json())
			.then(data => {
				console.log(data.results);

				let newArray = [];

				for (let a = 0; a <= data.results.length - 1; a++) {
					let allInfo = data.results[a];
					newArray.push(allInfo);
				}
				function compare(a, b) {
					const dateA = a.createdDate;
					const dateB = b.createdDate;

					let comparison = 0;
					if (dateA > dateB) {
						comparison = 1;
					} else if (dateA < dateB) {
						comparison = -1;
					}
					return comparison;
				}

				console.log(newArray.sort(compare));

				for (let a = newArray.length - 1; a > 0; a--) {
					let d = newArray[a].createdDate;
					new Date(d);
					document.getElementById("alltheInfo").innerHTML +=
						"The Fibonacci of " +
						"<span class='bold'>" +
						newArray[a].number +
						"</span>" +
						" is " +
						"<span class='bold'>" +
						newArray[a].result +
						"</span>" +
						" Calculated at: " +
						new Date(d) +
						"<hr/>";
				}
			});
	}
}

function DateDesc() {
	document.getElementById("alltheInfo").innerHTML = "";
	let useInput = document.getElementById("myText").value;
	if (useInput != 42 && useInput < 50) {
		let url = "http://localhost:5050/getFibonacciResults";
		console.log(url);
		fetch(url)
			.then(response => response.json())
			.then(data => {
				console.log(data.results);

				let newArray = [];

				for (let a = 0; a <= data.results.length - 1; a++) {
					let allInfo = data.results[a];
					newArray.push(allInfo);
				}
				function compare(a, b) {
					const dateA = a.createdDate;
					const dateB = b.createdDate;

					let comparison = 0;
					if (dateA > dateB) {
						comparison = 1;
					} else if (dateA < dateB) {
						comparison = -1;
					}
					return comparison;
				}

				console.log(newArray.sort(compare));

				for (let a = 0; a < newArray.length - 1; a++) {
					let d = newArray[a].createdDate;
					new Date(d);
					document.getElementById("alltheInfo").innerHTML +=
						"The Fibonacci of " +
						"<span class='bold'>" +
						newArray[a].number +
						"</span>" +
						" is " +
						"<span class='bold'>" +
						newArray[a].result +
						"</span>" +
						" Calculated at: " +
						new Date(d) +
						"<hr/>";
				}
			});
	}
}

function NumberAsc() {
	document.getElementById("alltheInfo").innerHTML = "";
	let useInput = document.getElementById("myText").value;
	if (useInput != 42 && useInput < 50) {
		let url = "http://localhost:5050/getFibonacciResults";
		console.log(url);
		fetch(url)
			.then(response => response.json())
			.then(data => {
				console.log(data.results);

				let newArray = [];

				for (let a = 0; a <= data.results.length - 1; a++) {
					let allInfo = data.results[a];
					newArray.push(allInfo);
				}
				function compare(a, b) {
					const unmberA = a.number;
					const numberB = b.number;

					let comparison = 0;
					if (unmberA > numberB) {
						comparison = 1;
					} else if (unmberA < numberB) {
						comparison = -1;
					}
					return comparison;
				}

				console.log(newArray.sort(compare));

				for (let a = 0; a < newArray.length - 1; a++) {
					let d = newArray[a].createdDate;
					new Date(d);
					document.getElementById("alltheInfo").innerHTML +=
						"The Fibonacci of " +
						"<span class='bold'>" +
						newArray[a].number +
						"</span>" +
						" is " +
						"<span class='bold'>" +
						newArray[a].result +
						"</span>" +
						" Calculated at: " +
						new Date(d) +
						"<hr/>";
				}
			});
	}
}

function NumberDesc() {
	document.getElementById("alltheInfo").innerHTML = "";
	let useInput = document.getElementById("myText").value;
	if (useInput != 42 && useInput < 50) {
		let url = "http://localhost:5050/getFibonacciResults";
		console.log(url);
		fetch(url)
			.then(response => response.json())
			.then(data => {
				console.log(data.results);

				let newArray = [];

				for (let a = 0; a <= data.results.length - 1; a++) {
					let allInfo = data.results[a];
					newArray.push(allInfo);
				}
				function compare(a, b) {
					const unmberA = a.number;
					const numberB = b.number;

					let comparison = 0;
					if (unmberA > numberB) {
						comparison = 1;
					} else if (unmberA < numberB) {
						comparison = -1;
					}
					return comparison;
				}

				console.log(newArray.sort(compare));

				for (let a = newArray.length - 1; a > 0; a--) {
					let d = newArray[a].createdDate;
					new Date(d);
					document.getElementById("alltheInfo").innerHTML +=
						"The Fibonacci of " +
						"<span class='bold'>" +
						newArray[a].number +
						"</span>" +
						" is " +
						"<span class='bold'>" +
						newArray[a].result +
						"</span>" +
						" Calculated at: " +
						new Date(d) +
						"<hr/>";
				}
			});
	}
}
//to to later:
// appendchild
// createlement
// let x = document.createElement("myelement")

// let myData = document.createElement(myData);
// myData.appendChild(
// 	`The Fibonacci of ${allInfo.number} is ${allInfo.result} Calculated at: ${d}`
// );
// document.getElementById("alltheInfo").innerHTML += myData;
