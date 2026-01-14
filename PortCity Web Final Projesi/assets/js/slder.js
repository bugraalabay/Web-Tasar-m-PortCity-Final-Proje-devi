const slider = document.getElementById("slider");
const slides = slider.children;
let index = 0;

// Noktalar
const dotsContainer = document.getElementById("dots");
for(let i=0;i<slides.length;i++){
    const dot = document.createElement("span");
    if(i===0) dot.classList.add("active");
    dot.addEventListener("click",()=>goToSlide(i));
    dotsContainer.appendChild(dot);
}
const dots = dotsContainer.children;

function updateDots(){
    for(let i=0;i<dots.length;i++) dots[i].classList.remove("active");
    dots[index].classList.add("active");
}

function goToSlide(i){
    index = i;
    slider.style.transform = `translateX(-${i*100}%)`;
    updateDots();
}

// Oklar
document.getElementById("next").onclick = () => {
    index = (index + 1) % slides.length;
    goToSlide(index);
};

document.getElementById("prev").onclick = () => {
    index = (index - 1 + slides.length) % slides.length;
    goToSlide(index);
};

// Otomatik geçiş
setInterval(() => {
    index = (index + 1) % slides.length;
    goToSlide(index);
}, 4500);
