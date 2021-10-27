let pokemonList = [
  {name: 'bulbasur', height: 7, type: ['grass', 'poison']},
  {name: 'charmander', height: 5, type: 'fire'},
  {name: 'wartortle', height: 3, type: 'water'}
];


let i = 0
for (;pokemonList[i];){
  document.write('<p>'pokemonList[i].name + ' ' + 'height:' + pokemonList[i].height '</p>');
  i++;
}
