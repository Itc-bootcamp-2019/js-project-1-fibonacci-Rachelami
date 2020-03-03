function Fibonacci(x) {
	let a = 0;
	let b = 1;
	let c = a + b;

	for (i = 1; i < x; i++) {
		c = a + b;
		a = b;
		b = c;
	}

	return c;
}

// let x = 14;
// c = Fibonacci(x);
// document.getElementById("x").innerText = x;

// if (x === 0) {
// 	document.getElementById("y").innerText = "0";
// } else if (x !== 0) {
// 	document.getElementById("y").innerText = c;
// }

function myFunction() {
	var x = document.getElementById("myText").value;
	document.getElementById("y").innerText = Fibonacci(x);
}

//I left the comments - I couldn't solve the 0 issue on this one
