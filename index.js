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

function addRecipes() {
  const addRecipeButton = document.querySelector(".add-recipe-button");
  addRecipeButton.addEventListener("click", openModal);
  const saveRecipeButton = document.querySelector(".save-recipe-button");
  saveRecipeButton.addEventListener("click", saveRecipe);
}

addRecipes();

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
  assignIndex();
}

// giving each recipe a data-attribute that corresponds to the index of the library array
function assignIndex() {
  let recipeElements = Array.from(document.querySelectorAll(".recipe-card"));
  for (let i = 0; i < recipeElements.length; i++) {
    const index = i;
    const recipeElement = recipeElements[i];
    recipeElement.setAttribute("data-index-num", `${index}`);
  }
}

assignIndex();

function deleteRecipes() {
  const deleteButtons = document.querySelectorAll(".delete-button");
  deleteButtons.forEach((deleteButton) => {
    deleteButton.addEventListener("click", function () {
      swal({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover this recipe.",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      }).then((willDelete) => {
        if (willDelete) {
          swal("Your recipe has been deleted.", {
            icon: "success",
          });
          // delete the selected recipe from myRecipes array using index
          const recipeIndex = deleteButton.parentNode.dataset.indexNum;
          myRecipes.splice(recipeIndex, 1);
          console.log(myRecipes);
          // remove the selected recipe from DOM
          const recipeContainer = document.querySelector(".recipes-container");
          let recipeElements = Array.from(
            document.querySelectorAll(".recipe-card")
          );
          recipeElements.forEach((recipeElement) => {
            if (recipeElement.dataset.indexNum === recipeIndex) {
              recipeContainer.removeChild(recipeElement);
            }
          });
          // reassign index for the remaining recipes
          assignIndex();
        } else {
          swal("Your recipe is safe!");
        }
      });
    });
  });
}

deleteRecipes();
