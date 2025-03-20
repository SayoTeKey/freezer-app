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
    imageUrl: vegetablesPath + "/",
    timestamp: longTime,
  },
  {
    id: 9,
    name: "Lettuce",
    type: "vegetables",
    imageUrl: vegetablesPath + "/",
    timestamp: longTime,
  },
  {
    id: 10,
    name: "Tomato",
    type: "vegetables",
    imageUrl: vegetablesPath + "/",
    timestamp: longTime,
  },
  {
    id: 11,
    name: "Pepper",
    type: "vegetables",
    imageUrl: vegetablesPath + "/",
    timestamp: longTime,
  },
  {
    id: 12,
    name: "Cucumber",
    type: "vegetables",
    imageUrl: vegetablesPath + "/",
    timestamp: longTime,
  },
  {
    id: 13,
    name: "Rucola",
    type: "vegetables",
    imageUrl: vegetablesPath + "/",
    timestamp: longTime,
  },
]);

food_map.set("fruits", [
  {
    id: 14,
    name: "Apple",
    type: "fruits",
    imageUrl: apple,
    timestamp: longTime,
  },
  {
    id: middleTime,
    name: "Banana",
    type: "fruits",
    imageUrl: banana,
    timestamp: longTime,
  },
  {
    id: 16,
    name: "Pear",
    type: "fruits",
    imageUrl: pear,
    timestamp: longTime,
  },
  {
    id: 17,
    name: "Kiwi",
    type: "fruits",
    imageUrl: kiwi,
    timestamp: longTime,
  },
  {
    id: 18,
    name: "Watermelon",
    type: "fruits",
    imageUrl: watermelon,
    timestamp: longTime,
  },
  {
    id: 19,
    name: "Durian",
    type: "fruits",
    imageUrl: durian,
    timestamp: longTime,
  },
  {
    id: 20,
    name: "Dragon Fruit",
    type: "fruits",
    imageUrl: dragonFruit,
    timestamp: longTime,
  },
]);

food_map.set("tinned_food", [
  {
    id: 21,
    name: "Fish can",
    type: "tinned food",
    imageUrl: fishCan,
    timestamp: longTime,
  },
  {
    id: 22,
    name: "Cat food",
    type: "tinned food",
    imageUrl: catFood,
    timestamp: longTime,
  },
  {
    id: 23,
    name: "Apple puree",
    type: "tinned food",
    imageUrl: applePuree,
    timestamp: longTime,
  },
  {
    id: 24,
    name: "Plums",
    type: "tinned food",
    imageUrl: plums,
    timestamp: longTime,
  },
  {
    id: 25,
    name: "capers",
    type: "tinned food",
    imageUrl: capers,
    timestamp: longTime,
  },
]);

food_map.set("sauces", [
  {
    id: 26,
    name: "Ketchup",
    type: "sauces",
    imageUrl: ketchup,
    timestamp: longTime,
  },
  {
    id: 27,
    name: "Mayonnaise",
    type: "sauces",
    imageUrl: mayo,
    timestamp: longTime,
  },
  {
    id: 28,
    name: "Mustard",
    type: "sauces",
    imageUrl: mustard,
    timestamp: longTime,
  },
  {
    id: 29,
    name: "Soy Sauce",
    type: "sauces",
    imageUrl: soySauce,
    timestamp: longTime,
  },
  {
    id: 30,
    name: "Barbecue Sauce",
    type: "sauces",
    imageUrl: barbecueSauce,
    timestamp: longTime,
  },
]);

food_map.set("fishAndMeat", [
  {
    id: 31,
    name: "Salmon",
    type: "fishAndMeat",
    imageUrl: salmon,
    timestamp: middleTime,
  },
  {
    id: 32,
    name: "Sushi",
    type: "fishAndMeat",
    imageUrl: sushi,
    timestamp: middleTime,
  },
  {
    id: 33,
    name: "Chicken breast",
    type: "fishAndMeat",
    imageUrl: chicken_breast,
    timestamp: 30,
  },
  {
    id: 34,
    name: "Bacon",
    type: "fishAndMeat",
    imageUrl: bacon,
    timestamp: 30,
  },
  {
    id: 35,
    name: "Sausage slices",
    type: "fishAndMeat",
    imageUrl: sausageSlices,
    timestamp: 30,
  },
  {
    id: 36,
    name: "Sausages",
    type: "fishAndMeat",
    imageUrl: sausages,
    timestamp: 30,
  },
]);

food_map.set("dairy", [
  {
    id: 37,
    name: "Milk",
    type: "dairy",
    imageUrl: milk,
    timestamp: middleTime,
  },
  {
    id: 38,
    name: "Cheese",
    type: "dairy",
    imageUrl: cheese,
    timestamp: middleTime,
  },
  {
    id: 39,
    name: "Yogurt",
    type: "dairy",
    imageUrl: yogurt,
    timestamp: middleTime,
  },
  {
    id: 40,
    name: "Butter",
    type: "dairy",
    imageUrl: butter,
    timestamp: middleTime,
  },
  {
    id: 41,
    name: "Cream",
    type: "dairy",
    imageUrl: cream,
    timestamp: middleTime,
  },
]);

food_map.set("ready", [
  {
    id: 42,
    name: "Carbonara",
    type: "ready",
    imageUrl: carbonara,
    timestamp: middleTime,
  },
  {
    id: 43,
    name: "Gratin",
    type: "ready",
    imageUrl: gratin,
    timestamp: middleTime,
  },
  {
    id: 44,
    name: "Kebab",
    type: "ready",
    imageUrl: kebab,
    timestamp: middleTime,
  },
  {
    id: 45,
    name: "Soup",
    type: "ready",
    imageUrl: soup,
    timestamp: middleTime,
  },
  {
    id: 46,
    name: "Sandwich",
    type: "ready",
    imageUrl: sandwich,
    timestamp: middleTime,
  },
  {
    id: 47,
    name: "Omelette",
    type: "ready",
    imageUrl: omelette,
    timestamp: middleTime,
  },
]);

food_map.set("eggs", [
  {
    id: 48,
    name: "Chicken Eggs",
    type: "eggs",
    imageUrl: chicken_eggs,
    timestamp: middleTime,
  },
  {
    id: 49,
    name: "Quail Eggs",
    type: "eggs",
    imageUrl: quail_eggs,
    timestamp: middleTime,
  },
  {
    id: 50,
    name: "Duck Eggs",
    type: "eggs",
    imageUrl: duck_eggs,
    timestamp: middleTime,
  },
  {
    id: 51,
    name: "Goose Eggs",
    type: "eggs",
    imageUrl: goose_eggs,
    timestamp: middleTime,
  },
]);

food_map.set("frozen", [
  {
    id: 52,
    name: "Frozen Pizza",
    type: "frozen",
    imageUrl: frozenPizza,
    timestamp: shortTime,
  },
  {
    id: 53,
    name: "Ice_cream",
    type: "frozen",
    imageUrl: iceCream,
    timestamp: shortTime,
  },
  {
    id: 54,
    name: "Frozen Berries",
    type: "frozen",
    imageUrl: frozenBerries,
    timestamp: shortTime,
  },
  {
    id: 55,
    name: "Frozen Chicken Wings",
    type: "frozen",
    imageUrl: frozenChickenWings,
    timestamp: shortTime,
  },
  {
    id: 56,
    name: "Frozen Broccoli",
    type: "frozen",
    imageUrl: frozenBroccoli,
    timestamp: shortTime,
  },
  {
    id: 57,
    name: "Frozen Burger Patties",
    type: "frozen",
    imageUrl: frozenBurgerPatties,
    timestamp: shortTime,
  },
  {
    id: 58,
    name: "Frozen French fries",
    type: "frozen",
    imageUrl: frozenFrenchFries,
    timestamp: shortTime,
  },
]);

export default food_map;
