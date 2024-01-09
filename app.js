document.addEventListener('DOMContentLoaded', () => {
  displaySafeFoods();
  displayAvoidFoods();
  displaySafeCatFoods();
  displayAvoidCatFoods(); 
});

function displaySafeFoods() {
  const safeFoodsList = document.getElementById('safe-foods');
  const safeFoods = ['닭', '당근', '호박', '블루베리', '연어'];

  safeFoods.forEach(food => {
    const listItem = document.createElement('li');
    listItem.textContent = food;
    listItem.classList.add('safe-food');
    safeFoodsList.appendChild(listItem);
  });
}

function displayAvoidFoods() {
  const avoidFoodsList = document.getElementById('avoid-foods');
  const avoidFoods = ['초콜릿', '양파', '마늘', '포도', '아보카도'];

  avoidFoods.forEach(food => {
    const listItem = document.createElement('li');
    listItem.textContent = food;
    listItem.classList.add('avoid-food');
    avoidFoodsList.appendChild(listItem);
  });
}

// 추가된 함수: 고양이 음식 초기 표시
function displaySafeCatFoods() {
  const safeCatFoodsList = document.getElementById('safe-cat-foods');
  const safeCatFoods = ['물고기', '닭의 간', '칠면조', '소고기', '달걀'];

  safeCatFoods.forEach(food => {
    const listItem = document.createElement('li');
    listItem.textContent = food;
    listItem.classList.add('safe-cat-food');
    safeCatFoodsList.appendChild(listItem);
  });
}

function displayAvoidCatFoods() {
  const avoidCatFoodsList = document.getElementById('avoid-cat-foods');
  const avoidCatFoods = ['초콜릿', '양파', '마늘', '술', '카페인'];

  avoidCatFoods.forEach(food => {
    const listItem = document.createElement('li');
    listItem.textContent = food;
    listItem.classList.add('avoid-cat-food');
    avoidCatFoodsList.appendChild(listItem);
  });
}

function addNewFood() {
  const newFoodInput = document.getElementById('new-food-input');
  const safeFoodsList = document.getElementById('safe-foods');

  if (newFoodInput.value.trim() !== "") {
    const newFoodItem = document.createElement('li');
    newFoodItem.textContent = newFoodInput.value.trim();
    safeFoodsList.appendChild(newFoodItem);
    newFoodInput.value = "";
  }
}

function addNewAvoidFood() {
  const newAvoidFoodInput = document.getElementById('new-avoid-food-input');
  const avoidFoodsList = document.getElementById('avoid-foods');

  if (newAvoidFoodInput.value.trim() !== "") {
    const newAvoidFoodItem = document.createElement('li');
    newAvoidFoodItem.textContent = newAvoidFoodInput.value.trim();
    avoidFoodsList.appendChild(newAvoidFoodItem);
    newAvoidFoodInput.value = "";
  }
}

function searchFoods() {
  const searchInput = document.getElementById('search-input').value.toLowerCase();
  const safeFoodsList = document.getElementById('safe-foods');
  const avoidFoodsList = document.getElementById('avoid-foods');

  Array.from(safeFoodsList.children).forEach(item => {
    const foodName = item.textContent.toLowerCase();
    item.style.display = foodName.includes(searchInput) ? 'block' : 'none';
  });

  Array.from(avoidFoodsList.children).forEach(item => {
    const avoidFoodName = item.textContent.toLowerCase();
    item.style.display = avoidFoodName.includes(searchInput) ? 'block' : 'none';
  });
}

function toggleFoods() {
  const safeFoodsList = document.getElementById('safe-foods');
  const avoidFoodsList = document.getElementById('avoid-foods');
  const safeFoodsToggle = document.getElementById('safe-foods-toggle');
  const avoidFoodsToggle = document.getElementById('avoid-foods-toggle');

  safeFoodsList.style.display = safeFoodsToggle.checked ? 'block' : 'none';
  avoidFoodsList.style.display = avoidFoodsToggle.checked ? 'block' : 'none';
}

function addNewCatFood() {
  const newCatFoodInput = document.getElementById('new-cat-food-input');
  const safeCatFoodsList = document.getElementById('safe-cat-foods');

  if (newCatFoodInput.value.trim() !== "") {
    const newCatFoodItem = document.createElement('li');
    newCatFoodItem.textContent = newCatFoodInput.value.trim();
    safeCatFoodsList.appendChild(newCatFoodItem);
    newCatFoodInput.value = "";
  }
}

function addNewAvoidCatFood() {
  const newAvoidCatFoodInput = document.getElementById('new-avoid-cat-food-input');
  const avoidCatFoodsList = document.getElementById('avoid-cat-foods');

  if (newAvoidCatFoodInput.value.trim() !== "") {
    const newAvoidCatFoodItem = document.createElement('li');
    newAvoidCatFoodItem.textContent = newAvoidCatFoodInput.value.trim();
    avoidCatFoodsList.appendChild(newAvoidCatFoodItem);
    newAvoidCatFoodInput.value = "";
  }
}

function searchCatFoods() {
  const searchCatInput = document.getElementById('search-cat-input').value.toLowerCase();
  const safeCatFoodsList = document.getElementById('safe-cat-foods');
  const avoidCatFoodsList = document.getElementById('avoid-cat-foods');

  Array.from(safeCatFoodsList.children).forEach(item => {
    const catFoodName = item.textContent.toLowerCase();
    item.style.display = catFoodName.includes(searchCatInput) ? 'block' : 'none';
  });

  Array.from(avoidCatFoodsList.children).forEach(item => {
    const avoidCatFoodName = item.textContent.toLowerCase();
    item.style.display = avoidCatFoodName.includes(searchCatInput) ? 'block' : 'none';
  });
}

function toggleCatFoods() {
  const safeCatFoodsList = document.getElementById('safe-cat-foods');
  const avoidCatFoodsList = document.getElementById('avoid-cat-foods');
  const safeCatFoodsToggle = document.getElementById('safe-cat-foods-toggle');
  const avoidCatFoodsToggle = document.getElementById('avoid-cat-foods-toggle');

  safeCatFoodsList.style.display = safeCatFoodsToggle.checked ? 'block' : 'none';
  avoidCatFoodsList.style.display = avoidCatFoodsToggle.checked ? 'block' : 'none';
}

document.addEventListener('DOMContentLoaded', () => {
  showDogMenu();
});

function showDogMenu() {
  document.getElementById('dog-menu').style.display = 'block';
  document.getElementById('cat-menu').style.display = 'none';
  document.body.style.backgroundImage = "url('https://www.ui4u.go.kr/depart/img/content/sub03/img_con03030100_01.jpg')";
}

function showCatMenu() {
  document.getElementById('dog-menu').style.display = 'none';
  document.getElementById('cat-menu').style.display = 'block';
  document.body.style.backgroundImage = "url('https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Stray_cat_at_Castillo_San_Felipe_del_Morro%2C_Puerto_Rico_%28cropped%29.jpg/800px-Stray_cat_at_Castillo_San_Felipe_del_Morro%2C_Puerto_Rico_%28cropped%29.jpg')";
}



