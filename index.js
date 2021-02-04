const myRecipes = [
  {
    name: "Tomato Soup",
    time: "20 minutes",
    difficulty: "Easy",
    ingredients:
      "Butter, Onion, Garlic, Flour, Tomato, Tomato Sauce, Chicken Stock, Sugar, Salt, Pepper",
    instructionsLink: "https://www.simplyrecipes.com/recipes/tomato_soup/",
    haveCooked: false,
  },
];

function Recipe(
  name,
  time,
  difficulty,
  ingredients,
  instructionsLink,
  haveCooked
) {
  this.name = name;
  this.time = time;
  this.difficulty = difficulty;
  this.ingredients = ingredients;
  this.instructionsLink = instructionsLink;
  this.haveCooked = false;
}

function openModal() {
  const modal = document.getElementById("myModal");
  const span = document.getElementsByClassName("close")[0];
  modal.style.display = "block";
  span.onclick = function () {
    modal.style.display = "none";
  };
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
}

function saveRecipe() {
  const name = document.querySelector(".recipe-name").value;
  const time = document.querySelector(".recipe-time").value;
  const difficulty = document.querySelector(".recipe-difficulty").value;
  const ingredients = document.querySelector(".recipe-ingredients").value;
  const instructionsLink = document.querySelector(".recipe-instructionsLink")
    .value;
  const haveCooked = document.querySelector(".recipe-haveCooked").value;
  const newRecipe = new Recipe(
    name,
    time,
    difficulty,
    ingredients,
    instructionsLink,
    haveCooked
  );
  myRecipes.push(newRecipe);
  console.log(myRecipes);
}

function addRecipes() {
  const addRecipeButton = document.querySelector(".add-recipe-button");
  addRecipeButton.addEventListener("click", openModal);
  const saveRecipeButton = document.querySelector(".save-recipe-button");
  saveRecipeButton.addEventListener("click", saveRecipe);
}

addRecipes();
