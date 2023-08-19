const showBtn = document.getElementById("show-btn");
const modal = document.querySelector("#modal");
const closes = document.querySelector("#close-btn");
const overlay = document.getElementById("overlay");

const hidden = () => {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

const removeH = () => {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

showBtn.addEventListener("click", removeH);

closes.addEventListener("click", hidden);

overlay.addEventListener("click", () => {
  hidden();
});

document.addEventListener("keydown", (i) => {
  // console.log([i])

  if (i.key == "i") {
    hidden()
  }
});

