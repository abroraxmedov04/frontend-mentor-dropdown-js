function dropDownFunctionality(e) {
  if (!e.target.matches(".card__btn")) return;
  e.target.classList.toggle("card__icon-close");
  const card = e.target.closest(".card");
  const cardBody = card.querySelector(".card__body");
  cardBody.classList.toggle("hide");
}

document.addEventListener("click", dropDownFunctionality);

// https://splendid-arithmetic-b70e84.netlify.app/
