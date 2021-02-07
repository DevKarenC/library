const myRecipes = [];

// Recipe Constructor Function
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
  this.haveCooked = haveCooked;
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
  const haveCooked = document.querySelector(".recipe-haveCooked").checked;
  const newRecipe = new Recipe(
    name,
    time,
    difficulty,
    ingredients,
    instructionsLink,
    haveCooked
  );
  myRecipes.push(newRecipe);
  displayRecipes(newRecipe);
}

function addRecipes() {
  const addRecipeButton = document.querySelector(".add-recipe-button");
  addRecipeButton.addEventListener("click", openModal);
  const saveRecipeButton = document.querySelector(".save-recipe-button");
  saveRecipeButton.addEventListener("click", saveRecipe);
}

addRecipes();

function displayRecipes(recipe) {
  const recipesContainer = document.querySelector(".recipes-container");
  const recipeCard = document.createElement("div");
  recipeCard.classList.add("recipe-card");
  const recipeName = document.createElement("div");
  recipeName.classList.add("recipe-card-name");
  recipeName.textContent = recipe.name;
  const recipeTime = document.createElement("div");
  recipeTime.textContent = recipe.time;
  const recipeDifficulty = document.createElement("div");
  recipeDifficulty.textContent = recipe.difficulty;
  const recipeIngredients = document.createElement("div");
  recipeIngredients.classList.add("recipe-card-ingredients");
  recipeIngredients.textContent = recipe.ingredients;
  const recipeInstructions = document.createElement("div");
  const link = document.createElement("a");
  link.href = recipe.instructionsLink;
  link.target = "_blank";
  link.textContent = "Recipe Site";
  recipeInstructions.append(link);
  const cookedButton = document.createElement("button");
  if (recipe.haveCooked) {
    cookedButton.textContent = "Cooked";
  } else {
    cookedButton.textContent = "Not Cooked";
  }
  recipeCard.append(
    recipeName,
    recipeTime,
    recipeDifficulty,
    recipeIngredients,
    recipeInstructions,
    cookedButton
  );
  recipesContainer.append(recipeCard);
}
