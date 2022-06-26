const input = document.getElementById("Input");
const button = document.getElementById("Add");
const ul = document.querySelector("ul");

function Creatlistelement() {
	const node = document.createElement('li');
	const textnode = document.createTextNode(input.value);
	node.appendChild(textnode)
	ul.appendChild(node);
	input.value = "";
}
function addListafterClick() {
	if (input.value.length > 0) {
		Creatlistelement();
	}
}

function addListafterkeypress(event) {
	if (input.value.length > 0 && event.code === "Enter") {
		Creatlistelement();
	}
}
button.addEventListener('click', addListafterClick)
input.addEventListener('keypress', addListafterkeypress)