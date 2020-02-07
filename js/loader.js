const loader = document.getElementById("loading");
const main = document.getElementById("main-content");

function init() {
  setTimeout(() => {
    loader.style.opacity = 0;
    loader.style.display = "none";

    main.style.display = "flex";
    setTimeout(() => (main.style.opacity = 1), 50);
  }, 3000);
}
init();
