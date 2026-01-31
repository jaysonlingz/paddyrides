// Registration Form Submission (only runs on registration page)
(() => {
  const form = document.getElementById("registrationForm");
  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const studentName = document.getElementById("studentName")?.value ?? "";
    const parentName = document.getElementById("parentName")?.value ?? "";
    const phone = document.getElementById("primaryPhone")?.value ?? "";

    const success = document.getElementById("successMessage");
    if (success) success.classList.add("show");

    const message = `New School Van Registration:

Student: ${studentName}
Parent: ${parentName}
Phone: ${phone}

Please contact to confirm.`;

    // Reset form
    this.reset();

    // Scroll to success message
    success?.scrollIntoView({ behavior: "smooth" });

    // OPTIONAL: Auto-open WhatsApp with pre-filled message
    // window.open(`https://wa.me/256757497850?text=${encodeURIComponent(message)}`, '_blank');

    console.log("Registration submitted for:", studentName);
  });
})();

// Smooth scrolling for in-page anchor links (kept for any # links)
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const targetId = this.getAttribute("href");
    if (!targetId || targetId === "#") return;

    const targetElement = document.querySelector(targetId);
    if (!targetElement) return;

    e.preventDefault();
    window.scrollTo({
      top: targetElement.offsetTop - 100,
      behavior: "smooth",
    });
  });
});

// Simple header scroll effect
window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  if (!header) return;
  header.style.padding = window.scrollY > 100 ? "10px 0" : "15px 0";
});
