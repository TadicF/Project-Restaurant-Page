export function menuPage() {
  const content = document.querySelector('#content');
  const menuPage = document.createElement('div');
  menuPage.classList.add('menuPage');
  content.appendChild(menuPage);

  // Creating Restaurant Title
  const restaurantMenu = document.createElement('div');
  restaurantMenu.classList.add('restaurantMenu');
  menuPage.appendChild(restaurantMenu);
  const restaurantName = document.createElement('h1');
  restaurantName.textContent = 'Restaurant Menu';
  restaurantMenu.appendChild(restaurantName);

  // Creating Breakfest Menu
  const breakfestMenu = document.createElement('div');
  breakfestMenu.classList.add('breakfestMenu');
  menuPage.appendChild(breakfestMenu);

  const breakfest = document.createElement('p');
  breakfest.textContent = 'Breakfest';
  breakfestMenu.appendChild(breakfest);

  const breakfest_one = createMenuItem(
    'Golden Morning Omelette',
    'Fluffy three-egg omelette with spinach, mushrooms, and cheddar – $8.50'
  );
  breakfestMenu.appendChild(breakfest_one);

  const breakfest_two = createMenuItem(
    'Sunrise Pancakes',
    'Stack of buttermilk pancakes served with maple syrup and fresh berries – $7'
  );
  breakfestMenu.appendChild(breakfest_two);

  const breakfest_three = createMenuItem(
    'Avocado Toast Deluxe',
    'Toasted sourdough with smashed avocado, poached egg, and chili flakes – $8'
  );
  breakfestMenu.appendChild(breakfest_three);

  const breakfest_four = createMenuItem(
    'Classic English Breakfest',
    'Eggs, sausage, bacon, beans, grilled tomato, mushrooms, and toast – $10'
  );
  breakfestMenu.appendChild(breakfest_four);

  // Creating Lunch Menu
  const lunchMenu = document.createElement('div');
  lunchMenu.classList.add('lunchMenu');
  menuPage.appendChild(lunchMenu);

  const lunch = document.createElement('p');
  lunch.textContent = 'Lunch';
  lunchMenu.appendChild(lunch);

  const lunch_one = createMenuItem(
    'Nocturne Club Sandwich',
    'Triple-layered sandwich with chicken, bacon, lettuce, tomato, and aioli – $9'
  );
  lunchMenu.appendChild(lunch_one);

  const lunch_two = createMenuItem(
    'Garden Bowl',
    'Quinoa, roasted chickpeas, avocado, hummus, and greens – $8.50'
  );
  lunchMenu.appendChild(lunch_two);

  const lunch_three = createMenuItem(
    'Creamy Pesto Pasta',
    'Penne pasta tossed in homemade basil pesto with cherry tomatoes – $9'
  );
  lunchMenu.appendChild(lunch_three);

  const lunch_four = createMenuItem(
    'Grilled Chicken Caesar Wrap',
    'Grilled chicken with romaine, parmesan, and Caesar dressing in a soft wrap – $8'
  );
  lunchMenu.appendChild(lunch_four);

  // Creating Dinner Menu
  const dinnerMenu = document.createElement('div');
  dinnerMenu.classList.add('dinnerMenu');
  menuPage.appendChild(dinnerMenu);

  const dinner = document.createElement('p');
  dinner.textContent = 'Dinner';
  dinnerMenu.appendChild(dinner);

  const dinner_one = createMenuItem(
    'Seared Salmon Fillet',
    'Served with garlic mashed potatoes, seasonal greens, and lemon butter sauce – $16'
    );
  dinnerMenu.appendChild(dinner_one);

  const dinner_two = createMenuItem(
    'Steak Frites',
    'Grilled sirloin steak with fries and peppercorn sauce – $18'
  );
  dinnerMenu.appendChild(dinner_two);

  const dinner_three = createMenuItem(
    'Mushroom Risotto',
    'Creamy arborio rice with mushrooms, parmesan, and fresh herbs – $14'
  );
  dinnerMenu.appendChild(dinner_three);

  const dinner_four = createMenuItem(
    'Nocturne Burger',
    'House beef patty, caramelized onions, cheddar, and truffle mayo – $13'
  );
  dinnerMenu.appendChild(dinner_four);

  // Creating Desserts Menu
  const dessertsMenu = document.createElement('div');
  dessertsMenu.classList.add("dessertsMenu");
  menuPage.appendChild(dessertsMenu);

  const desserts = document.createElement('p');
  desserts.textContent = 'Desserts';
  dessertsMenu.appendChild(desserts);

  const desserts_one = createMenuItem(
    'Molten Lava Cake',
    'Warm chocolate cake with a gooey center, served with vanilla ice cream – $7'
  );
  dessertsMenu.appendChild(desserts_one);

  const desserts_two = createMenuItem(
    'Lemon Tart',
    'Tangy lemon curd on a buttery crust with whipped cream – $6.50'
  );
  dessertsMenu.appendChild(desserts_two);

  const desserts_three = createMenuItem(
    'Seasonal Fruit Crumble',
    'Served with vanilla custard – $6'
  );
  dessertsMenu.appendChild(desserts_three);

  // Creating Drinks Menu
  const drinksMenu = document.createElement('div');
  drinksMenu.classList.add('drinksMenu');
  menuPage.appendChild(drinksMenu);

  const drinks = document.createElement('p');
  drinks.textContent = 'Drinks';
  drinksMenu.appendChild(drinks);

  const drinks_one = createMenuItem(
    'Espresso / Americano / Latte',
    '$2.50 $3 $3.50'
  );
  drinksMenu.appendChild(drinks_one);

  const drinks_two = createMenuItem(
    'Freshly Squeezed Orange Juice',
    '$3.50'
  );
  drinksMenu.appendChild(drinks_two);

  const drinks_three = createMenuItem(
    'Herbal Teas (Chamomile, Peppermint, Hibiscus)',
    '$3'
  );
  drinksMenu.appendChild(drinks_three);

  const drinks_four = createMenuItem(
    'House Smoothie (Banana + Berries + Yogurt)',
    '$4.50'
  );
  drinksMenu.appendChild(drinks_four);

  const drinks_five = createMenuItem(
    'Sparkling Water / Soft Drinks',
    '$2'
  );
  drinksMenu.appendChild(drinks_five);
}



function createMenuItem(name, description) {
  const item = document.createElement('div');

  const itemName = document.createElement('p');
  itemName.textContent = name;
  item.appendChild(itemName);

  const itemDesc = document.createElement('p');
  itemDesc.textContent = description;
  item.appendChild(itemDesc);

  return item;
}