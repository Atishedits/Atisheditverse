const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");
menuToggle.addEventListener("click", () => {
  const isOpen = navMenu.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});
navMenu.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  navMenu.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
}));
document.getElementById("year").textContent = new Date().getFullYear();

// The booking form uses FormSubmit. Replace YOUR_EMAIL@example.com in index.html
// with your real email address before publishing. First submission requires email activation.
const bookingForm = document.getElementById("bookingForm");
bookingForm.addEventListener("submit", () => {
  const status = document.getElementById("formStatus");
  status.textContent = "Sending your enquiry…";
});
