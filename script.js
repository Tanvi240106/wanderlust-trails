function bookNow() {
  alert("Thanks for your interest! Booking will be available soon.");
}

function submitForm(e) {
  e.preventDefault();
  alert("Thank you for contacting us! We'll get back to you shortly.");
}

// Scroll Animation Logic
const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
  threshold: 0.3,
};

const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('visible');
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});
