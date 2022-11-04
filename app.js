const openBtn = document.querySelector(".dropdown__btn");
const closeBtn = document.querySelector(".menu__btn");
const menu = document.querySelector(".dropdown__menu");
const features = document.querySelector(".menu__features");
const company = document.querySelector(".menu__company");
const dropDown = document.querySelector(".group-one");
const dropDown2 = document.querySelector(".group-two");
const overlay = document.querySelector(".overlay");

console.log(dropDown2);

window.addEventListener("click", (e) => {
  if (
    !e.target.matches(".menu__features") &&
    !e.target.matches(".menu__company") &&
    !e.target.parentElement.matches(".active")
  ) {
    dropDown.classList.remove("active");
    dropDown2.classList.remove("active");
    features.classList.remove("active");
    company.classList.remove("active");
  }
});

function close() {
  menu.classList.remove("active");
  dropDown.classList.remove("active");
  company.nextElementSibling.classList.remove("active");
  features.classList.remove("active");
  company.classList.remove("active");
  overlay.style.display = "none";
}

overlay.addEventListener("click", close);
closeBtn.addEventListener("click", close);

openBtn.addEventListener("click", () => {
  menu.classList.add("active");
  overlay.style.display = "block";
});

features.addEventListener("click", () => {
  dropDown.classList.toggle("active");
  features.classList.toggle("active");
});

company.addEventListener("click", (e) => {
  company.nextElementSibling.classList.toggle("active");
  company.classList.toggle("active");
});
