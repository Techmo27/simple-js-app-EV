//Array of Pokémons
let pokemonList = [
  {name: 'Bulbasur', height: 2.04, type: ['grass', 'poison']},
  {name: 'Charmander', height: 2, type: 'fire'},
  {name: 'Wartortle', height: 3.03, type: 'water'}
];


/* // Loop through Pokémons
for (let i = 0; i < pokemonList.length; i++){
  // If-else statement
  if (pokemonList[i].height > 3) {
      document.write("<p>" + pokemonList[i].name + " " + "Height:" + " " + pokemonList[i].height + " " + "- Wow that's tall!<p>");
  }else{
      document.write("<p>" + pokemonList[i].name + " " + "Height:" + " " + pokemonList[i].height + "<p>");
  }
} */

// looping through list of Pokémons
pokemonList.forEach(function(pokemon) {
  // If-else statement
  if (pokemon.height > 3) {
      document.write("<p>" + pokemon.name + " " + "Height:" + " " + pokemon.height + " " + "- Wow that's tall!<p>");
  }else{
      document.write("<p>" + pokemon.name + " " + "Height:" + " " + pokemon.height + "<p>");
  }
});

/*userList.forEach(function(user) {
  console.log(user.name + ' is ' + user.age + ' years old.');
});*/
