// #region Modal
var modal = document.getElementById("modal");
var modalBox = document.getElementById("modal-box");
var btn = document.getElementById("openModal");

btn?.addEventListener("click", () => {
  modal.style.display = "block";
});

// For handle close on click outside model
document.addEventListener("click", (e) => {
  if (e.target == modal) {
    modal.style.display = "none";
  }
});
// #endregion
