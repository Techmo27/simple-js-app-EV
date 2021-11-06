
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

  function add(item)   {
    pokemonList.push(item);
  }

  function getALL() {
    return pokemonList;
  }

  return {
    add: add,
    getALL: getALL
  };

})();

// pokemonRepository.getAll();
// pokemonRepository.add(item);


// looping through list of Pokémons
pokemonList.forEach(function(item) {
  // If-else statement to highlight Pokémons that are bigger than 3
  if (item.height > 3) {
      document.write("<p>" + item.name + " " + "Height:" + " " + item.height + " " + "- Wow that's tall!<p>");
  }else{
      document.write("<p>" + item.name + " " + "Height:" + " " + item.height + "<p>");
  }
});
