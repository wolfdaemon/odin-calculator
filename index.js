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

function operate(num, num1, btn) {
	switch (btn) {
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
