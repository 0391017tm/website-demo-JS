let $circle = document.querySelector("#circle");
let $upBtn = document.querySelector("#upBtn");
let $downBtn = document.querySelector("#downBtn");

let rotateValue = $circle.style.transform;

let rotateSum;

$upBtn.onclick = () => {
  rotateSum = rotateValue + "rotate(-90deg)";
  $circle.style.transform = rotateSum;
  rotateValue = rotateSum;
};
$downBtn.onclick = () => {
  rotateSum = rotateValue + "rotate(90deg)";
  $circle.style.transform = rotateSum;
  rotateValue = rotateSum;
};
