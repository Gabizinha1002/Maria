let selectedIngredients = [];

function addIngredient(ingredient) {
    if (!selectedIngredients.includes(ingredient)) {
        selectedIngredients.push(ingredient);
        updateIngredientList();
    }
}

function updateIngredientList() {
    const ingredientsList = document.getElementById('ingredientsList');
    ingredientsList.innerHTML = '';
    selectedIngredients.forEach(ingredient => {
        const li = document.createElement('li');
        li.textContent = ingredient.charAt(0).toUpperCase() + ingredient.slice(1);
        ingredientsList.appendChild(li);
    });
}

function bakeCake() {
    if (selectedIngredients.length < 3) {
        document.getElementById('cakeResult').textContent = 'Você precisa de pelo menos 3 ingredientes!';
    } else {
        const result = `Seu bolo foi feito com: ${selectedIngredients.join(', ')}!`;
        document.getElementById('cakeResult').textContent = result;
    }
}
