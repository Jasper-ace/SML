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
