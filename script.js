// const values = [1, 2, 3, 4, 5];
// const cubes = values.map(val => val**3);
// const evens = values.filter(val => val % 2 === 0);
// const odds = values.filter(val => val % 2 !==0);
// console.log(values);
// console.log(cubes);
// console.log(evens);
// console.log(odds);

// const groceries = ["pearl onions", "cremini mushrooms", "thyme"];
// const oFoods = groceries.filter( item => item.includes("o") );
// console.log(oFoods);

// const values1 = [1, 2, 3, 4, 5];
// const oddCubes = values1.filter(val => val % 2 !==0).map(val => val**3);
// console.log(oddCubes);

const pokemon = Object.freeze([
    { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
    { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
    { "id": 9,   "name": "Blastoise",  "types": ["water"] },
    { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
    { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
    { "id": 23,  "name": "Ekans",      "types": ["poison"] },
    { "id": 24,  "name": "Arbok",      "types": ["poison"] },
    { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
    { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
    { "id": 52,  "name": "Meowth",     "types": ["normal"] },
    { "id": 63,  "name": "Abra",       "types": ["psychic"] },
    { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
    { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
    { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
    { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
    { "id": 98,  "name": "Krabby",     "types": ["water"] },
    { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
    { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
    { "id": 133, "name": "Eevee",      "types": ["normal"] },
    { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
    { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
    { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
    { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
]);

const bListPkmn = pokemon.filter( p => p.name[0] === "B" );
console.log(bListPkmn);

// const pkmnIds = pokemon.map(p => p.id)
// console.log(pkmnIds);

const idByThree = pokemon.filter(p => p.id % 3 == 0);
console.log(idByThree);

const typeFire = pokemon.filter(p => p.types.includes("fire"));
console.log(typeFire);

const typeMult = pokemon.filter(p => p.types.length > 1);
console.log(typeMult);

const justNames = pokemon.map(p => p.name);
console.log(justNames);

const namesId = pokemon.filter(p => p.id > 99).map(p => p.name);
console.log(namesId);

const typePoison = pokemon.filter(p => p.types.length < 2 && p.types.includes("poison")).map(p => p.name);
console.log(typePoison);

const typeFlying = pokemon.filter(p => p.types[1] == "flying").map(p => p.types[0]);
console.log(typeFlying);

const typeNormal = pokemon.filter(p => p.types.includes("normal")).length;
console.log(typeNormal);