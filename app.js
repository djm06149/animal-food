document.addEventListener('DOMContentLoaded', () => {
  displaySafeFoods();
  displayAvoidFoods();
});

function displaySafeFoods() {
  const safeFoodsList = document.getElementById('safe-foods');
  const safeFoods = ['Chicken', 'Carrots', 'Pumpkin', 'Blueberries', 'Salmon'];

  safeFoods.forEach(food => {
    const listItem = document.createElement('li');
    listItem.textContent = food;
    safeFoodsList.appendChild(listItem);
  });
}

function displayAvoidFoods() {
  const avoidFoodsList = document.getElementById('avoid-foods');
  const avoidFoods = ['Chocolate', 'Onions', 'Garlic', 'Grapes', 'Avocado'];

  avoidFoods.forEach(food => {
    const listItem = document.createElement('li');
    listItem.textContent = food;
    avoidFoodsList.appendChild(listItem);
  });
}

function addNewFood() {
  const newFoodInput = document.getElementById('new-food-input');
  const newFood = newFoodInput.value.trim();

  if (newFood !== '') {
    const safeFoodsList = document.getElementById('safe-foods');
    const avoidFoodsList = document.getElementById('avoid-foods');

    const listItem = document.createElement('li');
    listItem.textContent = newFood;

    if (safeFoodsList.style.display !== 'none') {
      safeFoodsList.appendChild(listItem);
    }

    newFoodInput.value = '';
  }
}

function addNewAvoidFood() {
  const newAvoidFoodInput = document.getElementById('new-avoid-food-input');
  const newAvoidFood = newAvoidFoodInput.value.trim();

  if (newAvoidFood !== '') {
    const avoidFoodsList = document.getElementById('avoid-foods');

    const listItem = document.createElement('li');
    listItem.textContent = newAvoidFood;
    avoidFoodsList.appendChild(listItem);

    newAvoidFoodInput.value = '';
  }
}

function searchFoods() {
  const searchInput = document.getElementById('search-input').value.toLowerCase();
  const safeFoodsList = document.getElementById('safe-foods');
  const avoidFoodsList = document.getElementById('avoid-foods');

  const safeFoods = Array.from(safeFoodsList.children);
  const avoidFoods = Array.from(avoidFoodsList.children);

  safeFoods.forEach(food => toggleVisibility(food, food.textContent.toLowerCase().includes(searchInput)));
  avoidFoods.forEach(food => toggleVisibility(food, food.textContent.toLowerCase().includes(searchInput)));
}

function toggleVisibility(element, shouldShow) {
  element.style.display = shouldShow ? 'block' : 'none';
}

function toggleFoods() {
  const safeFoodsList = document.getElementById('safe-foods');
  const avoidFoodsList = document.getElementById('avoid-foods');
  const safeFoodsToggle = document.getElementById('safe-foods-toggle');
  const avoidFoodsToggle = document.getElementById('avoid-foods-toggle');

  safeFoodsList.style.display = safeFoodsToggle.checked ? 'block' : 'none';
  avoidFoodsList.style.display = avoidFoodsToggle.checked ? 'block' : 'none';
}
