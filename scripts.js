let prevButton = document.getElementById("prev");
let nextButton = document.getElementById("next");
let container = document.querySelector(".container");
let items = container.querySelectorAll(".list .item");
let indicator = document.querySelector(".indicators");
let number = document.querySelector(".number");
let dots = indicator.querySelectorAll("ul li");

let active = 0;
let firstPosition = 0;
let lastPoisition = items.length - 1;

nextButton.onclick = () => {
  let itemOld = container.querySelector(".list .item.active");
  itemOld.classList.remove("active");

  active = active + 1 > lastPoisition ? 0 : active + 1;
  items[active].classList.add("active");

  AlterDotsActive();

  let dotsOld = indicator.querySelector("ul li.active");
  dotsOld.classList.remove("active");
  dots[active].classList.add("active");
};

prevButton.onclick = () => {
  let itemOld = container.querySelector(".list .item.active");
  itemOld.classList.remove("active");

  active = active - 1 < firstPosition ? lastPoisition : active - 1;
  AlterDotsActive();
  items[active].classList.add("active");
};

function AlterDotsActive() {
  var numberDotActive = active + 1;
  
  if (active > 9)
    number.innerHTML = numberDotActive;
  else
    number.innerHTML = "0" + numberDotActive;

  let dotAnterior = indicator.getElementsByClassName("active")[0];
  dotAnterior.classList.remove("active");

  let dotActive = document.getElementById(numberDotActive);
  dotActive.classList.add("active");
}
