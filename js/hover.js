// document.getElementById('hover3').style.color = 'red'

const link1 = document.getElementById("hover1");
const link2 = document.getElementById("hover2");
const link3 = document.getElementById("hover3");

link1.onmouseover = function () {
  mouseOver1();
};
link2.onmouseover = function () {
  mouseOver2();
};
link3.onmouseover = function () {
  mouseOver3();
};

link1.onmouseout = function () {
  mouseOut1();
};
link2.onmouseout = function () {
  mouseOut2();
};
link3.onmouseout = function () {
  mouseOut3();
};

function mouseOver1() {
  link1.classList.add("has-a-success-text");
}
function mouseOver2() {
  link2.classList.add("has-a-success-text");
}
function mouseOver3() {
  link3.classList.add("has-a-success-text");
}

function mouseOut1() {
  link1.classList.remove("has-a-success-text");
}
function mouseOut2() {
  link2.classList.remove("has-a-success-text");
}
function mouseOut3() {
  link3.classList.remove("has-a-success-text");
}
