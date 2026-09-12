// Set these before launch, then every "Join" / "Apply" button updates at once.
const LINKS = {
  join: "https://chat.whatsapp.com/H96ijOmtG3e8p8uJDEiYKY?s=sw&p=i&mlu=4&ilr=4",
  apply: "https://forms.gle/6iPypX35Rui3x8SZ6",
};

document.querySelectorAll("[data-link]").forEach((el) => {
  const url = LINKS[el.dataset.link];
  if (!url || url === "#") return;
  el.href = url;
  el.target = "_blank";
  el.rel = "noopener";
});

const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();
