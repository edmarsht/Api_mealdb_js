const getMealBtn = document.getElementById('get_meal');
const mealContainer = document.getElementById('meal');

getMealBtn.addEventListener('click', () => {
    fetch('https://www.themealdb.com/api/json/v1/1/random.php')
        .then(res => res.json())
        .then(res => {
        createMeal(res.meals[0])
        })
});

function createMeal(meal) {
    mealContainer.innerHTML = `
        <div class="container">
            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                <div class="col">
                    <h1 class="fw-light"> Ta recette 🤩 </h1>
                    <div class="card shadow-sm">
                        <img src="${meal.strMealThumb}" alt="Meal Img"/>
                        <div class="card-body">
                            <p class="card-text"><strong>${meal.strMeal}</strong></p>
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <div class="d-flex justify-content-between align-items-center">
                                <p><strong>Catégorie</strong> : ${meal.strCategory}</p>
                                <div class="btn-group">
                                    <button type="button" class="btn btn-sm btn-outline-secondary">Voir plus</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
    `;
}
