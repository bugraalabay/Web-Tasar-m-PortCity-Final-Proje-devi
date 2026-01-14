let index2 = 0;
const slides2 = document.querySelectorAll(".slide2");

function showSlide2(i) {
    slides2.forEach(s => s.classList.remove("active"));
    index2 = (i + slides2.length) % slides2.length;
    slides2[index2].classList.add("active");
}

document.querySelector(".next2").onclick = () => showSlide2(index2 + 1);
document.querySelector(".prev2").onclick = () => showSlide2(index2 - 1);

// otomatik geçiş
setInterval(() => showSlide2(index2 + 1), 4000);
