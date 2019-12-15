let enterPopup = document.querySelector(".feedback");
let popup = document.querySelector(".popup");

enterPopup.addEventListener("click", function(evt) {
  popup.classList.add("popup-show");
});

let closePopup = document.querySelector(".modal-close");

closePopup.addEventListener("click", function(evt) {
  popup.classList.remove("popup-show");
});
