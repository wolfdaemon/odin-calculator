let numArr = [];

function add(num, num1) {
	return num + num1;
};

function subtract(num, num1) {
	return num - num1;
};

function multiply(num, num1) {
	return num * num1;
};

function divide(num, num1) {
	return num / num1;
}

function operate(num, num1, equ) {
	switch (equ) {
		case "addi":
			return add(num, num1);
			break;
		case "subt":
			return subtract(num, num1);
			break;
		case "mult":
			return multiply(num, num1);
			break;
		case "divi":
			return divide(num, num1);
			break;
	}
}

const displayOutput = document.querySelector(".display-output");

const btn = document.querySelectorAll("button").forEach(item => {
	item.addEventListener("click", (e) => {
		displayOutput.innerHTML = e.target.innerHTML;

		// TODO: How do we make it so that, within a "compute" cycle,
		// we can ensure that the second number (num1) is applied with
		// the second click within that cycle? Find this out, please.
		//
		// Oh god, are we going to have to use an array and a array
		// method to ensure this happens? Ugh :facepalm:, makes sense.

		let num = e.target.innerHTML;
		let equ = e.target.innerHTML;

		num = parseInt(num, 10);

		if (!isNaN(num)) {
			numArr.push(num);
		}

		switch (equ) {
			case "+":
				equ = "addi";
				numArr.push(equ);
				break;
			case "-":
				equ = "subt";
				numArr.push(equ);
				break;
			case "*":
				equ = "mult"; 
				numArr.push(equ);
				break;
			case "÷":
				equ = "divi"; 
				numArr.push(equ);
				break;
		}

		if (e.target.innerHTML === "=" && numArr.length === 3) {
			let dis = operate(numArr[0], numArr[2], numArr[1]);
			displayOutput.innerHTML = dis;
		}

	});
});

/*
function sum(arr) {
	return arr.reduce((accumulator, element) => { return accumulator + element }, 0);
};
*/

/*
function multiplyArray(arr) {
	return arr.reduce((acc, item) => { return acc * item });
};
*/

/*
const power = function(num, num1) {
	let arr = [];
	for (i = 0; i < num1; i++) {
		arr.push(num);
	}
	return arr.reduce((acc, item) => { return acc * item });
};

const factorial = function(num) {
	let arr = [];
	num = num + 1;
	for (i = 1; i < num; i++) {
		arr.push(i);
	}
	return arr.reduce((acc, item) => { return acc * item }, 1);
};
*/
