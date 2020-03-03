function Fibonacci(x) {
	let a = 0;
	let b = 1;
	let c = a + b;

	for (let i = 1; i < x; i++) {
		c = a + b;
		a = b;
		b = c;
	}
	return c;
}

let myX = document.getElementById("x");
let myY = document.getElementById("y");

let x = 6;
c = Fibonacci(x);
myX.innerText = x;

if (x === 0) {
	myY.innerText = "0";
} else if (x !== 0) {
	myY.innerText = c;
}
