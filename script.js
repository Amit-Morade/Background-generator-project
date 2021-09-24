const input1 = document.querySelector("#color1");
const input2 = document.querySelector("#color2");
const msg = document.querySelector("#msg-window");
const body = document.querySelector("body");
let defaultoption = "to right";

const select = document.querySelector("select");

select.addEventListener("input", () => {
	defaultoption = select.value;
	changeColor();
})

const changeColor = () => {
	body.style.background = `linear-gradient(${defaultoption}, ${input1.value}, ${input2.value})`;
	msg.textContent = `background : linear-gradient(${defaultoption}, ${input1.value}, ${input2.value})`;
}


input1.addEventListener("input", changeColor);

input2.addEventListener("input", changeColor);



