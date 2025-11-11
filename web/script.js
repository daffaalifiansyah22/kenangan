document.getElementById("mulaiBtn").onclick = function () {
    document.getElementById("intro").style.display = "none";
    document.getElementById("content").classList.remove("hidden");

    const music = document.getElementById("music");
    music.volume = 0.5;
    music.play();

    confetti.start();
    setTimeout(() => confetti.stop(), 2500);
};
// Buka Konten + Musik
document.getElementById("mulaiBtn").onclick = function () {
    document.getElementById("intro").style.display = "none";
    document.getElementById("content").classList.remove("hidden");

    const music = document.getElementById("music");
    music.volume = 0.5;
    music.play();
};

// SLIDER
let index = 0;
const slides = document.querySelector(".slides");
const totalSlides = document.querySelectorAll(".slide").length;

document.querySelector(".next").onclick = () => {
    index = (index + 1) % totalSlides;
    slides.style.transform = `translateX(-${index * 100}%)`;
};

document.querySelector(".prev").onclick = () => {
    index = (index - 1 + totalSlides) % totalSlides;
    slides.style.transform = `translateX(-${index * 100}%)`;
};

// Tampilkan Video
document.getElementById("lihatVideoBtn").onclick = function () {
    document.querySelector(".video").classList.remove("hiddenVideo");
    this.style.display = "none";
};
const bubbleContainer = document.querySelector(".text-bubbles");

function createBubble() {
    const bubble = document.createElement("span");
    const size = Math.random() * 8 + 4; // ukuran bubble random 4px–12px
    bubble.style.width = size + "px";
    bubble.style.height = size + "px";
    bubble.style.left = Math.random() * 100 + "%";
    bubbleContainer.appendChild(bubble);

    setTimeout(() => {
        bubble.remove();
    }, 6000);
}

setInterval(createBubble, 450);
