// if (screen.width <= 992) {
//     let div = document.createElement("div");
//     div.className = "sideOverlay";
//     document.querySelector("header").appendChild(div)
// }
document.querySelector("h1").innerHTML = document.title;
let side = document.querySelector("header ul"),
    sideOpen = document.querySelector("#open"),
    sideClose = document.querySelector("#close"),
    sideOverlay = document.querySelector(".sideOverlay");

sideOpen.onclick = function() {
    side.classList.add("opened");
    sideOverlay.style.removeProperty("display")
    sideOverlay.style.setProperty("display", "block")
}
sideClose.onclick = function() {
    side.classList.remove("opened");
    sideOverlay.style.removeProperty("display")
    sideOverlay.style.setProperty("display", "none")
}

document.querySelector("button.top").onclick = function() {
    window.scrollTo(0, 0);
}