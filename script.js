(function () {
  const yearEl = document.querySelector("[data-year]");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  const toggleBtn = document.querySelector("[data-nav-toggle]");
  const nav = document.querySelector("[data-nav]");
  if (!toggleBtn || !nav) return;

  function closeNav() {
    nav.dataset.open = "false";
    toggleBtn.setAttribute("aria-expanded", "false");
  }

  function toggleNav() {
    const isOpen = nav.dataset.open === "true";
    nav.dataset.open = isOpen ? "false" : "true";
    toggleBtn.setAttribute("aria-expanded", String(!isOpen));
  }

  toggleBtn.addEventListener("click", toggleNav);

  // Close menu when clicking a nav link (mobile)
  nav.addEventListener("click", (e) => {
    const target = e.target;
    if (target && target.tagName === "A") closeNav();
  });

  // Close on Escape
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeNav();
  });
})();
