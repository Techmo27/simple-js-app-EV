let pokemonList = [
  {name: 'bulbasur', height: 7, type: ['grass', 'poison']},
  {name: 'charmander', height: 5, type: 'fire'},
  {name: 'wartortle', height: 3, type: 'water'}
];



for (let i = 0; i < pokemonList.length; i++){
  document.write('<p>'pokemonList[i].name + pokemonList[i].height + pokemonList[i].type'</p>')
}
