const triggers = document.getElementsByClassName("trigger");
const backdrop = document.getElementById("backdrop");
const finder = document.getElementById("finder");

backdrop.addEventListener("click", (event) => {
  backdrop.style.display = "none";
  finder.style.zIndex = null;
  finder.style.position = null;
  finder.style.left = null;
  finder.style.top = null;
  finder.style.transform = null;
});

for (trigger of triggers) {
  trigger.addEventListener("focusin", () => {
    backdrop.style.display = "block";
    finder.style.zIndex = "100";
    finder.style.position = "fixed";
    finder.style.left = "50%";
    finder.style.top = "50%";
    finder.style.transform = "translate(-50%,-50%)";
  });

  trigger.addEventListener("focusout", () => {
    backdrop.style.display = "block";
    finder.style.position = "fixed";
    finder.style.left = "50%";
    finder.style.top = "50%";
    finder.style.transform = "translate(-50%,-50%)";
  });
}
