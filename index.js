const padlOrel = Math.random() < 0.5;

if (padlOrel) {
  document.querySelector(".vysledek").textContent = "Padl orel"
  document.querySelector(".mince").classList.add("mince--orel")
} else {
  document.querySelector(".vysledek").textContent = "Padla panna"
  document.querySelector(".mince").classList.add("mince--panna")
}

//Kromě změny textu ještě přidejte prvku .mince druhou třídu mince--orel nebo mince--panna opět podle hodnoty v proměnné padlOrel.
