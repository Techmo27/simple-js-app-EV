
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

  function add(pokemon) {
    pokemonList.push(pokemon);
  }

  function addListItem(item) {
    let pokemonTable = document.querySelector('.pokemon-list');
    let pokemonItem = document.createElement('li');
    let button = document.createElement('button');
    button.innerText = item.name;
    button.classList.add('pokemon-button');
    pokemonItem.appendChild(button);
    pokemonTable.appendChild(pokemonItem);
  }

  function getALL() {
    return pokemonList;
  }

  return {
    add: add,
    getALL: getALL,
    addListItem: addListItem,
  };

})();

console.log(pokemonRepository.getALL());

/* This is my solution to exercise 1.5
// looping through list of Pokémons
pokemonRepository.getALL().forEach(function (item) {
  // If-else statement to highlight Pokémons that are bigger than 3
  if (item.height > 3) {
      document.write("<p>" + item.name + " " + "Height:" + " " + item.height + " " + "- Wow that's tall!<p>");
  }else{
      document.write("<p>" + item.name + " " + "Height:" + " " + item.height + "<p>");
  }
}); */

pokemonRepository.getALL().forEach(function (item) {
  pokemonRepository.addListItem(item);
});
