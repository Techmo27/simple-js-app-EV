
let pokemonRepository = (function () {

  let pokemonList = [
    {
      name: 'Bulbasur',
      height: 2.04,
      type: ['grass', 'poison']
    },
    {
      name: 'Charmander',
      height: 2,
      type: 'fire'
    },
    {
      name: 'Wartortle',
      height: 3.03,
      type: 'water'
    }
  ];

  function add(pokemon)   {
    pokemonList.push(pokemon);
  }

  function getALL() {
    return pokemonList;
  }

  return {
    add: add,
    getALL: getALL
  };

})();

pokemonRepository.getAll();
pokemonRepository.add(item);


// looping through list of Pokémons
pokemonRepository.getAll().forEach(function(pokemon) {
  // If-else statement to highlight Pokémons that are bigger than 3
  if (pokemon.height > 3) {
      document.write("<p>" + pokemon.name + " " + "Height:" + " " + pokemon.height + " " + "- Wow that's tall!<p>");
  }else{
      document.write("<p>" + pokemon.name + " " + "Height:" + " " + pokemon.height + "<p>");
  }
});
