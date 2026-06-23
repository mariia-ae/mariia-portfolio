const text = "Open to Software Development Internship.";
const typingElement = document.getElementById("typing-text");

let index = 0;
let isDeleting = false;
function typeEffect() {
    if (!isDeleting) {
        typingElement.textContent = text.substring(0, index);
        index++;
        if (index > text.length) {
            isDeleting = true;
            setTimeout(typeEffect, 3500);
            return;
        }
    } else {
        typingElement.textContent = text.substring(0, index);
        index--;
        if (index < 0) {
            isDeleting = false;
        }
    }
    const speed = isDeleting ? 55 : 95;
    setTimeout(typeEffect, speed);
}
typeEffect();
