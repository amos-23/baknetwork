// Set these before launch, then every "Join" / "Apply" button updates at once.
const LINKS = {
  join: "#",   // e.g. your Discord/Skool/Circle invite link
  apply: "#",  // e.g. your Typeform/Tally application form
};

document.querySelectorAll("[data-link]").forEach((el) => {
  const url = LINKS[el.dataset.link];
  if (url && url !== "#") el.href = url;
});

const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();
