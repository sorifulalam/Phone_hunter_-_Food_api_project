const loadMeals = (searchText) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
  fetch(url)
    .then(res => res.json())
    .then(data => displayMeals(data.meals));
};
const displayMeals = meals => {
  //step 1 - container elements id caught ................
  const mealsContainer = document.getElementById('meals-container');
  //ayta search dewar por j card ta searrh dewa hobe seta pabe baki gula null hoiya jabe
  mealsContainer.innerHTML = ' ';
  

  meals.forEach( meal => {
    console.log(meal);
    // step 2 - creat child for ecah element ................
    const mealDiv = document.createElement("div");
    mealDiv.classList.add("col");

    // step 3 - Set content of the  child
    mealDiv.innerHTML = `<div class="card h-100">
    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
    <div class="card-body ">
      <h5 class="card-title">${meal.strMeal}</h5>
      <p class="card-text">${meal.strInstructions}</p>

      <!-- Button trigger modal -->
      <button type="button" onclick="loadmealdetailes(${meal.idMeal})" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#mealDetailsmodal">
          Meal-Detailes
        </button>

    </div>
  </div>`;

    //setep 4 - append child
    mealsContainer.appendChild(mealDiv)
    
  });
};

const searchMeal = () =>{
    
    const searchText = document.getElementById('Search-field');
    const searchValue = searchText.value;
    searchText.value=' '
    //console.log(searchText);
   
    
    loadMeals(searchValue);
    
    

}

const  loadmealdetailes =idMeal=>{
    // console.log(idMeal)

    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
    fetch(url)
    .then(res => res.json())
    .then(data =>displayMealDetailes(data.meals[0]))
}

const displayMealDetailes =meal=>{
    document.getElementById('mealDetailsmodalLabel').innerText=meal.strMeal;
    const mealsDetailes = document.getElementById('mealDetailesbody');
    mealsDetailes.innerHTML=`
    <img class="img-fluid" src='${meal.strMealThumb}'></img>
     <p>Make This - (${meal.strIngredient1} , ${meal.strIngredient2},${meal.strIngredient3},${meal.strIngredient4},${meal.strIngredient5},${meal.strIngredient6},${meal.strIngredient7},${meal.strIngredient8},${meal.strIngredient9},${meal.strIngredient10} )</p>
    `
}

loadMeals('chi');
