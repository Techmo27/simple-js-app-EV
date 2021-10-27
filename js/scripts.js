//Array of Pokémons and their data
let pokemonList = [
  {name: 'Bulbasur', height: 7, type: ['grass', 'poison']},
  {name: 'Charmander', height: 5, type: 'fire'},
  {name: 'Wartortle', height: 3, type: 'water'}
];



for (let i = 0 ;pokemonList[i]; i++){
  document.write(pokemonList[i].name + ' ' + 'height:' + pokemonList[i].height + ' ');

}
