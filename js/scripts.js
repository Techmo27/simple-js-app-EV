//Array of Pokémons and their data
let pokemonList = [
  {name: 'Bulbasur', height: 7, type: ['grass', 'poison']},
  {name: 'Charmander', height: 5, type: 'fire'},
  {name: 'Wartortle', height: 3, type: 'water'}
];



for (let i = 1; i < pokemonList[i].length; i++){
  document.write("<p>")
  document.write(pokemonList[i].name + " " + "Height:" + pokemonList[i].height + " ");
  document.write("</p>")
}
