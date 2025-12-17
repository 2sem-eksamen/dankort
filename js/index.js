// --- Popup ÅBN: via "Tilmeld dig"-knappen ---
document.getElementById("tilmeld-btn").addEventListener("click", () => {
  document.getElementById("popup-title").textContent =
    document.getElementById("tilmeld-btn").dataset.title;
  document.getElementById("popup-description").textContent =
    document.getElementById("tilmeld-btn").dataset.description;

  document.getElementById("offer-toggle").checked = true;
});

// --- Popup LUK: via kryds-knap ---
document.getElementById("close-btn").addEventListener("click", () => {
  document.getElementById("offer-toggle").checked = false;
});

// --- Popup LUK: klik på overlay udenfor indholdet ---
document.getElementById("popup-overlay").addEventListener("click", (e) => {
  if (e.target.id === "popup-overlay") {
    document.getElementById("offer-toggle").checked = false;
  }
});
