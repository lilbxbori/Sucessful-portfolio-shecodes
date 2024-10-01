// Theme toggle
let themeButton = document.getElementById("theme-toggle");
let body = document.body;
let topBar = document.getElementById("top-bar");
let bigFooter = document.getElementById("big-footer");

window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "light") {
    body.classList.remove("dark-theme");
    body.classList.add("light-theme");

    topBar.classList.remove("light-theme");
    topBar.classList.add("dark-theme");

    if (bigFooter) {
      bigFooter.classList.remove("light-theme");
      bigFooter.classList.add("dark-theme");
    }

    themeButton.textContent = "💡";
  } else {
    
    body.classList.remove("light-theme");
    body.classList.add("dark-theme");

    topBar.classList.remove("dark-theme");
    topBar.classList.add("light-theme");

    if (bigFooter) {
      bigFooter.classList.remove("dark-theme");
      bigFooter.classList.add("light-theme");
    }

    themeButton.textContent = "🕶️";
  }
  const typeEffectElement = document.getElementById("type-effect");
  if (typeEffectElement) {
    typeEffect(typeEffectElement, phrases);
  }
});

themeButton.addEventListener("click", () => {
  if (body.classList.contains("dark-theme")) {
    body.classList.remove("dark-theme");
    body.classList.add("light-theme");

    topBar.classList.remove("light-theme");
    topBar.classList.add("dark-theme");

    if (bigFooter) {
      bigFooter.classList.remove("light-theme");
      bigFooter.classList.add("dark-theme");
    }

    themeButton.textContent = "💡";

  
    localStorage.setItem("theme", "light");
  } else {
    body.classList.remove("light-theme");
    body.classList.add("dark-theme");

    topBar.classList.remove("dark-theme");
    topBar.classList.add("light-theme");

    if (bigFooter) {
      bigFooter.classList.remove("dark-theme");
      bigFooter.classList.add("light-theme");
    }

    themeButton.textContent = "🕶️";
    localStorage.setItem("theme", "dark");
  }
});

const phrases = [
  "Mother of Two 👩‍👧‍👦",
  "Baseball Mom ⚾",
  "Wife 👩🏻‍❤️‍💋‍👨🏻",
  "Book Lover 📖",
  "Puerto Rican 🇵🇷",
  "Cheer Mom 👧🏻🎉"
];
function typeEffect(element, phrases) {
  let phraseIndex = 0;
  let letterIndex = 0;
  let currentPhrase = "";
  let isDeleting = false;
  let delay = 200;

  function type() {
    if (phraseIndex >= phrases.length) {
      phraseIndex = 0;
    }

    currentPhrase = phrases[phraseIndex];
    let displayedText = currentPhrase.substring(0, letterIndex);
    element.textContent = "and a -" + displayedText;

    if (!isDeleting) {
      if (letterIndex < currentPhrase.length) {
        letterIndex++;
        delay = 200;
      } else {
        isDeleting = true;
        delay = 2000;
      }
    } else {
      if (letterIndex > 0) {
        letterIndex--;
        delay = 100;
      } else {
        isDeleting = false;
        phraseIndex++;
        delay = 500;
      }
    }

    setTimeout(type, delay);
  }

  type();
}