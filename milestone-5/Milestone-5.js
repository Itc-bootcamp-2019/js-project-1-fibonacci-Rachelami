// function Fibonacci(x) {
// 	let a = 0;
// 	let b = 1;
// 	let c = a + b;

// 	for (i = 1; i < x; i++) {
// 		c = a + b;
// 		a = b;
// 		b = c;
// 	}

// 	return c;
// }

function myFunction() {
	let url = "http://localhost:5050/fibonacci/";
	url = url + document.getElementById("myText").value;
	fetch(url)
		.then(response => response.json())
		.then(data => {
			console.log(data.number);
			console.log(data.result);
			console.log(data);
			document.getElementById("y").innerText = data.result;
		});
}
