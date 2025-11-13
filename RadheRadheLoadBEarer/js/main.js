// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      e.preventDefault();
      window.scrollTo({
        top: target.offsetTop - 80,
        behavior: "smooth",
      });
    }
  });
});

// Mobile nav toggle
document.querySelectorAll(".nav-toggle").forEach(btn => {
  btn.addEventListener("click", () => {
    const nav = document.getElementById("mainNav");
    if (nav) {
      nav.classList.toggle("active");
      nav.style.display = nav.style.display === "flex" ? "none" : "flex";
      nav.style.flexDirection = "column";
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
    if (!id) {
      alert("Please enter a tracking ID");
      return;
    }
    const statuses = ["Picked up from origin", "In transit", "At distribution hub", "Out for delivery", "Delivered"];
    const randomStatus = statuses[id.length % statuses.length];
    const timestamp = new Date().toLocaleString();
    result.style.display = "block";
    result.innerHTML = `
      <div style="padding: 16px; background: linear-gradient(135deg, #e8f5e9, #f1f8e9); border-radius: 8px; border-left: 4px solid var(--accent-green);">
        <p style="margin: 0 0 8px 0;"><strong>Tracking ID:</strong> ${id}</p>
        <p style="margin: 0 0 8px 0;"><strong>Status:</strong> <span style="color: var(--accent-green); font-weight: 700;">${randomStatus}</span></p>
        <p style="margin: 0; color: var(--muted); font-size: 13px;">Last updated: ${timestamp}</p>
      </div>
    `;
  });
}

// Contact form submission (demo)
const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", e => {
    e.preventDefault();
    const name = document.getElementById("name").value || "Customer";
    const email = document.getElementById("email").value || "unknown@example.com";
    
    alert(`Thank you, ${name}!\n\nYour message has been received.\nWe'll get back to you at ${email} within 24 hours.\n\n(This is a demo — connect a backend to process real submissions.)`);
    contactForm.reset();
  });
}

// Year auto-update in footer
document.querySelectorAll("#year").forEach(el => {
  el.textContent = new Date().getFullYear();
});

// Scroll to top on page load
window.addEventListener('load', () => {
  window.scrollTo(0, 0);
});
