// Example script to show interaction
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".officer-card");

  cards.forEach(card => {
    card.addEventListener("click", () => {
      alert(`You clicked on ${card.querySelector("h2").innerText}`);
    });
  });
});
function toggleMenu() {
  document.getElementById("nav-links").classList.toggle("show");
}

// Optional: Auto-close menu when clicking a link
document.querySelectorAll("#nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    document.getElementById("nav-links").classList.remove("show");
  });
});
document.querySelectorAll('.officer-card').forEach(card => {
  const closeBtn = card.querySelector('.close-btn');

  // Flip on tap
  card.addEventListener('click', function () {
    if (window.innerWidth <= 768) {
      this.classList.add('flipped');
    }
  });

  // Exit flip when X is tapped
  closeBtn.addEventListener('click', function (e) {
    e.stopPropagation(); // prevent re-triggering card flip
    card.classList.remove('flipped');
  });
});
