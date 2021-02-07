const myRecipes = [
  {
    name: "Tomato Soup",
    time: "20 minutes",
    difficulty: "Easy",
    ingredients:
      "Butter, Onion, Garlic, Flour, Tomato, Tomato sauce, Chicken stock, Sugar, Salt, Pepper",
    instructionsLink: "https://www.simplyrecipes.com/recipes/tomato_soup/",
    haveCooked: true,
  },
  {
    name: "Chicken Mac and Cheese",
    time: "45 minutes",
    difficulty: "Easy",
    ingredients:
      "Macaroni, Onion, Garlic, Butter, Flour, Milk, Cheddar cheese, Cooked chicken, Salt, Pepper",
    instructionsLink:
      "https://www.simplyrecipes.com/recipes/easy_chicken_mac_and_cheese/",
    haveCooked: false,
  },
  {
    name: "Greek Salad",
    time: "15 minutes",
    difficulty: "Easy",
    ingredients:
      "Olive oil, Lemon juice, Garlic, Vinegar, Oregano, Pepper, Tomatoes, Cucumber, Onion, Bell pepper, Olives, Feta Cheese",
    instructionsLink: "https://www.simplyrecipes.com/recipes/dads_greek_salad/",
    haveCooked: false,
  },
];

function displayDefaultRecipes() {
  const recipesContainer = document.querySelector(".recipes-container");
  myRecipes.forEach((defaultRecipe) => {
    const recipeCard = document.createElement("div");
    recipeCard.classList.add("recipe-card");
    const recipeName = document.createElement("div");
    // const recipePic = document.createElement("div");
    const recipeTime = document.createElement("div");
    const recipeDifficulty = document.createElement("div");
    const recipeIngredients = document.createElement("div");
    const recipeInstructions = document.createElement("div");
    const recipeCooked = document.createElement("div");
    recipeName.textContent = defaultRecipe.name;
    recipeTime.textContent = defaultRecipe.time;
    recipeDifficulty.textContent = defaultRecipe.difficulty;
    recipeIngredients.textContent = defaultRecipe.ingredients;
    recipeInstructions.textContent = defaultRecipe.instructionsLink;
    recipeCooked.textContent = defaultRecipe.haveCooked;
    recipeCard.append(
      recipeName,
      // recipePic,
      recipeTime,
      recipeDifficulty,
      recipeIngredients,
      recipeInstructions,
      recipeCooked
    );
    recipesContainer.append(recipeCard);
  });
}

// displayDefaultRecipes();

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
  displayRecipes();
  console.log(myRecipes);
}

function addRecipes() {
  const addRecipeButton = document.querySelector(".add-recipe-button");
  addRecipeButton.addEventListener("click", openModal);
  const saveRecipeButton = document.querySelector(".save-recipe-button");
  saveRecipeButton.addEventListener("click", saveRecipe);
}

addRecipes();

function displayRecipes() {
  const recipesContainer = document.querySelector(".recipes-container");
  myRecipes.forEach((recipe) => {
    // if (!myRecipes.includes(recipe)) {
    // console.log(recipe);
    const recipeCard = document.createElement("div");
    recipeCard.classList.add("recipe-card");
    const recipeName = document.createElement("div");
    // const recipePic = document.createElement("div");
    const recipeTime = document.createElement("div");
    const recipeDifficulty = document.createElement("div");
    const recipeIngredients = document.createElement("div");
    const recipeInstructions = document.createElement("div");
    const recipeCooked = document.createElement("div");
    recipeName.textContent = recipe.name;
    recipeTime.textContent = recipe.time;
    recipeDifficulty.textContent = recipe.difficulty;
    recipeIngredients.textContent = recipe.ingredients;
    recipeInstructions.textContent = recipe.instructionsLink;
    recipeCooked.textContent = recipe.haveCooked;
    recipeCard.append(
      recipeName,
      // recipePic,
      recipeTime,
      recipeDifficulty,
      recipeIngredients,
      recipeInstructions,
      recipeCooked
    );
    recipesContainer.append(recipeCard);
    // }
  });
}
