// IMPORT
// dairy
const dairyPath = "../images/dairy";

// drinks
const drinksPath = "../images/drinks";

// eggs
const eggsPath = "../images/eggs";

// fish and meat
const fishAndMeatPath = "../images/fishAndMeat";

// frozen
const frozenPath = "../images/frozen";

// fruits
const fruitsPath = "../images/fruits";

// ready
const readyPath = "../images/ready";

// sauces
const saucesPath = "../images/sauces";

// tinned food
const tinnedFoodPath = "../images/tinnedFood";

// vegetables
const vegetablesPath = "../images/vegetables";

// Map-Objekt
let food_map = new Map();

const shortTime = 10;
const middleTime = 15;
const longTime = 20;

food_map.set("drinks", [
  {
    id: 1,
    name: "Coke",
    type: "drinks",
    imageUrl: drinksPath + "/coke.jpg",
    timestamp: longTime,
  },
  {
    id: 2,
    name: "Orange Juice",
    type: "drinks",
    imageUrl: drinksPath + "/orange_juice.jpg",
    timestamp: longTime,
  },
  {
    id: 3,
    name: "Water",
    type: "drinks",
    imageUrl: drinksPath + "/water.jpg",
    timestamp: longTime,
  },
  {
    id: 4,
    name: "Tea",
    type: "drinks",
    imageUrl: drinksPath + "/tea.jpg",
    timestamp: longTime,
  },
  {
    id: 5,
    name: "Coffee",
    type: "drinks",
    imageUrl: drinksPath + "/coffee.jpg",
    timestamp: longTime,
  },
  {
    id: 6,
    name: "Almond milk",
    type: "drinks",
    imageUrl: drinksPath + "/almond_milk.png",
    timestamp: longTime,
  },
  {
    id: 7,
    name: "Oat milk",
    type: "drinks",
    imageUrl: drinksPath + "/oat_milk.jpg",
    timestamp: longTime,
  },
]);

food_map.set("vegetables", [
  {
    id: 8,
    name: "Carrot",
    type: "vegetables",
    imageUrl: vegetablesPath + "/carrot.jpg",
    timestamp: longTime,
  },
  {
    id: 9,
    name: "Lettuce",
    type: "vegetables",
    imageUrl: vegetablesPath + "/lettuce.jpg",
    timestamp: longTime,
  },
  {
    id: 10,
    name: "Tomato",
    type: "vegetables",
    imageUrl: vegetablesPath + "/tomato.jpg",
    timestamp: longTime,
  },
  {
    id: 11,
    name: "Pepper",
    type: "vegetables",
    imageUrl: vegetablesPath + "/pepper.jpg",
    timestamp: longTime,
  },
  {
    id: 12,
    name: "Cucumber",
    type: "vegetables",
    imageUrl: vegetablesPath + "/cucumber.png",
    timestamp: longTime,
  },
  {
    id: 13,
    name: "Rucola",
    type: "vegetables",
    imageUrl: vegetablesPath + "/rucola.png",
    timestamp: longTime,
  },
]);

food_map.set("fruits", [
  {
    id: 14,
    name: "Apple",
    type: "fruits",
    imageUrl: fruitsPath + "/apple.jpg",
    timestamp: longTime,
  },
  {
    id: middleTime,
    name: "Banana",
    type: "fruits",
    imageUrl: fruitsPath + "/banana.jpg",
    timestamp: longTime,
  },
  {
    id: 16,
    name: "Pear",
    type: "fruits",
    imageUrl: fruitsPath + "/pear.jpg",
    timestamp: longTime,
  },
  {
    id: 17,
    name: "Kiwi",
    type: "fruits",
    imageUrl: fruitsPath + "/kiwi.png",
    timestamp: longTime,
  },
  {
    id: 18,
    name: "Watermelon",
    type: "fruits",
    imageUrl: fruitsPath + "/watermelon.png",
    timestamp: longTime,
  },
  {
    id: 19,
    name: "Durian",
    type: "fruits",
    imageUrl: fruitsPath + "/durian.png",
    timestamp: longTime,
  },
  {
    id: 20,
    name: "Dragon Fruit",
    type: "fruits",
    imageUrl: fruitsPath + "/dragon_fruit.png",
    timestamp: longTime,
  },
]);

food_map.set("tinned_food", [
  {
    id: 21,
    name: "Fish can",
    type: "tinned food",
    imageUrl: tinnedFoodPath + "/fish_can.png",
    timestamp: longTime,
  },
  {
    id: 22,
    name: "Cat food",
    type: "tinned food",
    imageUrl: tinnedFoodPath + "/cat_food.png",
    timestamp: longTime,
  },
  {
    id: 23,
    name: "Apple puree",
    type: "tinned food",
    imageUrl: tinnedFoodPath + "/apple_puree.png",
    timestamp: longTime,
  },
  {
    id: 24,
    name: "Plums",
    type: "tinned food",
    imageUrl: tinnedFoodPath + "/plums.png",
    timestamp: longTime,
  },
  {
    id: 25,
    name: "capers",
    type: "tinned food",
    imageUrl: tinnedFoodPath + "/capers.png",
    timestamp: longTime,
  },
]);

food_map.set("sauces", [
  {
    id: 26,
    name: "Ketchup",
    type: "sauces",
    imageUrl: saucesPath + "/ketchup.png",
    timestamp: longTime,
  },
  {
    id: 27,
    name: "Mayonnaise",
    type: "sauces",
    imageUrl: saucesPath + "/mayo.png",
    timestamp: longTime,
  },
  {
    id: 28,
    name: "Mustard",
    type: "sauces",
    imageUrl: saucesPath + "/mustard.png",
    timestamp: longTime,
  },
  {
    id: 29,
    name: "Soy Sauce",
    type: "sauces",
    imageUrl: saucesPath + "/soySauce.png",
    timestamp: longTime,
  },
  {
    id: 30,
    name: "Barbecue Sauce",
    type: "sauces",
    imageUrl: saucesPath + "/barbecueSauce",
    timestamp: longTime,
  },
]);

food_map.set("fishAndMeat", [
  {
    id: 31,
    name: "Salmon",
    type: "fishAndMeat",
    imageUrl: fishAndMeatPath + "/salmon.jpg",
    timestamp: middleTime,
  },
  {
    id: 32,
    name: "Sushi",
    type: "fishAndMeat",
    imageUrl: fishAndMeatPath + "/sushi.jpg",
    timestamp: middleTime,
  },
  {
    id: 33,
    name: "Chicken breast",
    type: "fishAndMeat",
    imageUrl: fishAndMeatPath + "/chicken_breast.jpg",
    timestamp: 30,
  },
  {
    id: 34,
    name: "Bacon",
    type: "fishAndMeat",
    imageUrl: fishAndMeatPath + "/bacon.png",
    timestamp: 30,
  },
  {
    id: 35,
    name: "Sausage slices",
    type: "fishAndMeat",
    imageUrl: fishAndMeatPath + "/sliced_sausage.jpg",
    timestamp: 30,
  },
  {
    id: 36,
    name: "Sausages",
    type: "fishAndMeat",
    imageUrl: fishAndMeatPath + "/sausages.png",
    timestamp: 30,
  },
]);

food_map.set("dairy", [
  {
    id: 37,
    name: "Milk",
    type: "dairy",
    imageUrl: dairyPath + "/milk.png",
    timestamp: middleTime,
  },
  {
    id: 38,
    name: "Cheese",
    type: "dairy",
    imageUrl: dairyPath + "/cheese.png",
    timestamp: middleTime,
  },
  {
    id: 39,
    name: "Yogurt",
    type: "dairy",
    imageUrl: dairyPath + "/yogurt.png",
    timestamp: middleTime,
  },
  {
    id: 40,
    name: "Butter",
    type: "dairy",
    imageUrl: dairyPath + "/butter.png",
    timestamp: middleTime,
  },
  {
    id: 41,
    name: "Cream",
    type: "dairy",
    imageUrl: dairyPath + "/cream.png",
    timestamp: middleTime,
  },
]);

food_map.set("ready", [
  {
    id: 42,
    name: "Carbonara",
    type: "ready",
    imageUrl: readyPath + "/carbonara.png",
    timestamp: middleTime,
  },
  {
    id: 43,
    name: "Gratin",
    type: "ready",
    imageUrl: readyPath + "/gratin.png",
    timestamp: middleTime,
  },
  {
    id: 44,
    name: "Kebab",
    type: "ready",
    imageUrl: readyPath + "/kebab.png",
    timestamp: middleTime,
  },
  {
    id: 45,
    name: "Soup",
    type: "ready",
    imageUrl: readyPath + "/soup.jpg",
    timestamp: middleTime,
  },
  {
    id: 46,
    name: "Sandwich",
    type: "ready",
    imageUrl: readyPath + "/sandwich.jpg",
    timestamp: middleTime,
  },
  {
    id: 47,
    name: "Omelette",
    type: "ready",
    imageUrl: readyPath + "/omelette.png",
    timestamp: middleTime,
  },
]);

food_map.set("eggs", [
  {
    id: 48,
    name: "Chicken Eggs",
    type: "eggs",
    imageUrl: eggsPath + "/chicken_eggs.png",
    timestamp: middleTime,
  },
  {
    id: 49,
    name: "Quail Eggs",
    type: "eggs",
    imageUrl: eggsPath + "/quail_eggs.png",
    timestamp: middleTime,
  },
  {
    id: 50,
    name: "Duck Eggs",
    type: "eggs",
    imageUrl: eggsPath + "/duck_eggs.png",
    timestamp: middleTime,
  },
  {
    id: 51,
    name: "Goose Eggs",
    type: "eggs",
    imageUrl: eggsPath + "/goose_eggs.png",
    timestamp: middleTime,
  },
]);

food_map.set("frozen", [
  {
    id: 52,
    name: "Frozen Pizza",
    type: "frozen",
    imageUrl: frozenPath + "/frozen_pizza.png",
    timestamp: shortTime,
  },
  {
    id: 53,
    name: "Ice cream",
    type: "frozen",
    imageUrl: frozenPath + "/iceCream.jpg",
    timestamp: shortTime,
  },
  {
    id: 54,
    name: "Frozen Berries",
    type: "frozen",
    imageUrl: frozenPath + "/frozen_berries.jpg",
    timestamp: shortTime,
  },
  {
    id: 55,
    name: "Frozen Chicken Wings",
    type: "frozen",
    imageUrl: frozenPath + "/frozen_chicken_wings.jpg",
    timestamp: shortTime,
  },
  {
    id: 56,
    name: "Frozen Broccoli",
    type: "frozen",
    imageUrl: frozenPath + "/frozen_broccoli.png",
    timestamp: shortTime,
  },
  {
    id: 57,
    name: "Frozen Burger Patties",
    type: "frozen",
    imageUrl: frozenPath + "/frozen_burger_patties.png",
    timestamp: shortTime,
  },
  {
    id: 58,
    name: "Frozen French fries",
    type: "frozen",
    imageUrl: frozenPath + "/frozen_french_fries.png",
    timestamp: shortTime,
  },
]);

export default food_map;
