let valueCurrent = [];
let valueCurrent1 = [];
let valueCurrent2 = 0;
let operationCurrent = [];

const btn = document.querySelectorAll("button").forEach(item => {
	item.addEventListener("click", (e) => {

		let value = e.target.innerHTML;

		if (value === ".") {
			displayNumJoin(value);
		} else if (isNaN(value)) {
			operationCurrent.push(value);
		} else {
			displayNumJoin(value);
		}

		if (operationCurrent[0] === undefined) {
			return;
		} else if (operationCurrent[0] !== undefined) {
			if (valueCurrent1.length === 0) {
				valueCurrent1 = parseFloat(valueCurrent.join(""), 10);
				valueCurrent = [];
			} else {
				if (operationCurrent[1] !== undefined) {
					if (valueCurrent.length === 0) {
						operationCurrent.shift();
					} else {
						valueCurrent = parseFloat(valueCurrent.join(""), 10); 
						valueCurrent2 = operate(valueCurrent1, operationCurrent, valueCurrent);
						valueCurrent2 = valueCurrent2.toFixed(4);
						updateDisplay(valueCurrent2);
						valueCurrent = [];
						valueCurrent1 = valueCurrent2;
						valueCurrent2 = [];
						operationCurrent.shift();
					}
				}
				return;
			}
		} else {
			valueCurrent2 = operate(valueCurrent1, operationCurrent, valueCurrent);
			updateDisplay(valueCurrent2);
			valueCurrent = [];
			valueCurrent2 = [];
		}

		if (valueCurrent > 0 && valueCurrent1 > 0 && operationCurrent[1] !== undefined) {
			valueCurrent2 = operate(valueCurrent1, operationCurrent, valueCurrent);
			updateDisplay(valueCurrent2);
			valueCurrent = [];
			valueCurrent1 = [];
		}

	});

});

function displayNumJoin(value) {
	valueCurrent.push(value);
	updateDisplay(valueCurrent.join(""));
}

function operate(a, op, b) {
	switch (op[0]) {
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
