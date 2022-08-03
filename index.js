const view = document.getElementById("views");
const viewA = document.getElementById("kilo-million");
const price = document.getElementById("price");
const toggle = document.getElementById("switch");

view.innerHTML = 100;
viewA.innerHTML = "K";

price.innerHTML = parseFloat(16).toFixed(2);

let discount = 1;

toggle.addEventListener("change", () => {
  if (toggle.checked) {
    discount = 0.75;
    price.innerHTML = parseFloat(price.innerHTML * discount).toFixed(2);
  } else {
    discount = 1;
    price.innerHTML = parseFloat(price.innerHTML * (discount / 0.75)).toFixed(2);
  }
});



const slider = document.getElementById("viewRange").oninput = function () {
  let colorValue = ((this.value - this.min)/(this.max - this.min))* 100;
  this.style.background =
    "linear-gradient(to right,var(--light-green)" +
    colorValue +
    "%, var(--slider-default) " +
    colorValue +
    "%, var(--slider-default) 100%)";
  if (this.value !== 100) {
    viewA.innerHTML = "K";
  }

   if(this.value == 0){
        views.innerHTML = 5;
        amount = 0.8;
        price.innerHTML = parseFloat( amount * discount ).toFixed(2);
    }else if(this.value == 12.5){
        views.innerHTML = 10;
        amount = 1.6;
        price.innerHTML = parseFloat( amount * discount ).toFixed(2);
    }else if(this.value == 25){
        views.innerHTML = 20;
        amount = 3.2;
        price.innerHTML = parseFloat( amount * discount ).toFixed(2);
    }else if(this.value == 37.5){
        views.innerHTML = 50;
        amount = 8;
        price.innerHTML = parseFloat( amount * discount ).toFixed(2);
    }else if(this.value == 50){
        views.innerHTML = 100;
        amount = 16;
        price.innerHTML = parseFloat( amount * discount ).toFixed(2);
    }else if(this.value == 62.5){
        views.innerHTML = 150;
        amount = 24;
        price.innerHTML = parseFloat( amount * discount ).toFixed(2);
    }else if(this.value == 75){
        views.innerHTML = 300;
        amount = 32;
        price.innerHTML = parseFloat( amount * discount ).toFixed(2);
    }else if(this.value == 87.5){
        views.innerHTML = 500;
        amount = 80;
        price.innerHTML = parseFloat( amount * discount ).toFixed(2);
    }else if(this.value == 100){
        views.innerHTML = 1;
        amount = 160;
        price.innerHTML = parseFloat( amount * discount ).toFixed(2);
        viewAbbreviation.innerHTML = 'M';
    }
};
