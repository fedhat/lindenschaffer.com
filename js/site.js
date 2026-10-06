// Mobile menu toggle
const toggle = document.querySelector(".menu-toggle");
const nav = document.getElementById("site-nav");
if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  });
}

// Testimonial carousel arrows (the track also scrolls by swipe/trackpad)
const track = document.querySelector(".quotes-track");
if (track) {
  const prev = document.querySelector(".quotes-prev");
  const next = document.querySelector(".quotes-next");
  const step = () => track.querySelector(".quote").getBoundingClientRect().width + parseFloat(getComputedStyle(track).columnGap || 0);
  const update = () => {
    prev.disabled = track.scrollLeft <= 2;
    next.disabled = track.scrollLeft + track.clientWidth >= track.scrollWidth - 2;
  };
  prev.addEventListener("click", () => track.scrollBy({ left: -step(), behavior: "smooth" }));
  next.addEventListener("click", () => track.scrollBy({ left: step(), behavior: "smooth" }));
  track.addEventListener("scroll", update, { passive: true });
  window.addEventListener("resize", update);
  update();
}
