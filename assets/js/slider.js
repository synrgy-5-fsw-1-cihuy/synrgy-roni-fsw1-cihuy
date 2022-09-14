const buttonLeft = document.getElementById("slide-left");
const buttonRight = document.getElementById("slide-right");
const wrapper = document.getElementById("wrapper-testimonials");
let cards = document.getElementsByClassName("card-testimonials");

buttonLeft.onclick = () => {
  wrapper.scrollTo({
    left: wrapper.scrollLeft - cards[0].clientWidth - 30,
    behavior: "smooth",
  });
};

buttonRight.onclick = () => {
  wrapper.scrollTo({
    left: wrapper.scrollLeft + cards[0].clientWidth + 30,
    behavior: "smooth",
  });
};
