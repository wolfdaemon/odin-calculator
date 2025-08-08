let valueCurrent = [];
let valueCurrent1 = [];
let valueCurrent2 = 0;
let operationCurrent = null;

const btn = document.querySelectorAll("button").forEach(item => {
	item.addEventListener("click", (e) => {

		let value = e.target.innerHTML;
		if (isNaN(value)) {
			operationCurrent = value;
		}
		else {
			valueCurrent.push(value);
			updateDisplay(valueCurrent.join("")); // display the current numbers in place
		}

		if (operationCurrent === null) {
			return;
		} else {
			// in the event an operation has been established, actually convert the display number into an int
			if (valueCurrent1.length === 0) {
				valueCurrent1 = parseInt(valueCurrent.join(""), 10);
				valueCurrent = [];
			} else {
				valueCurrent = parseInt(valueCurrent.join(""), 10);
			}

			if (valueCurrent > 0 && valueCurrent1 > 0) {
		 		valueCurrent2 = operate(valueCurrent1, operationCurrent, valueCurrent);
				updateDisplay(valueCurrent2);
				valueCurrent = [];
				valueCurrent1 = [];
			}

			/* TODO: Continue with logic that would allow the incoming valueCurrent to operate with
			 * valueCurrent2. Essentially, what is happening is that we're saving the value of the
			 * first calculation with valueCurrent2, and erasing the values of valueCurrent &
			 * valueCurrent1 after assigning a value to valueCurrent2. At that point, we have a
			 * new incoming value with valueCurrent again, and the computer doesn't know how to
			 * interact with a new valueCurrent & and empty valueCurrent1.

		}
	});
});


function operate(a, op, b) {
	switch (op) {
		case "+":
			return a + b;
			break;
		case "-":
			return a - b;
			break;
		case "*":
			return a * b;
			break;
		case "÷":
			return a / b;
			break;
		default:
			return a;
	}
}

function updateDisplay(value) {
	const displayOutput = document.querySelector(".display-output");
	displayOutput.innerHTML = value;
}

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
