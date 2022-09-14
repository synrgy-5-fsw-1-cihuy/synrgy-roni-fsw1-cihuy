const buttonLeft = document.getElementById("slide-left");
const buttonRight = document.getElementById("slide-right");
let cards = document.getElementsByClassName("card-testimonials");

buttonLeft.onclick = () => {
  document.getElementById("wrapper-testimonials").scrollLeft -=
    cards[0].clientWidth + 30;
};
buttonRight.onclick = () => {
  document.getElementById("wrapper-testimonials").scrollLeft +=
    cards[0].clientWidth + 30;
};
