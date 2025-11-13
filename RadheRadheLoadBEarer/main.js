// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      e.preventDefault();
      window.scrollTo({
        top: target.offsetTop - 70,
        behavior: "smooth",
      });
    }
  });
});

// Track shipment simulation
const trackForm = document.getElementById("trackForm");
if (trackForm) {
  trackForm.addEventListener("submit", e => {
    e.preventDefault();
    const id = document.getElementById("trackingId").value.trim();
    const result = document.getElementById("trackResult");
    if (!id) return alert("Enter a tracking ID");
    const status = ["Picked up", "In transit", "Delivered"];
    const randomStatus = status[id.length % status.length];
    result.style.display = "block";
    result.innerHTML = `<p><strong>ID:</strong> ${id}</p><p>Status: ${randomStatus}</p>`;
  });
}

// Contact form demo
const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", e => {
    e.preventDefault();
    alert("Thanks! Your message has been recorded (demo only).");
    contactForm.reset();
  });
}

// Mobile nav
document.querySelectorAll(".nav-toggle").forEach(btn => {
  btn.addEventListener("click", () => {
    const nav = document.getElementById("mainNav");
    nav.style.display = nav.style.display === "flex" ? "none" : "flex";
    nav.style.flexDirection = "column";
  });
});

// Year auto-update
document.querySelectorAll("#year").forEach(el => {
  el.textContent = new Date().getFullYear();
});
