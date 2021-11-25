
let pokemonRepository = (function () {

  let pokemonList = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

/*add function pushes a pokémon into my array afte
validating that it's an object and has a name*/
  function add(pokemon) {
    if (
      typeof pokemon === 'object' &&
      'name' in pokemon
      ) {
        pokemonList.push(pokemon);
      } else {
        console.log('Pokémon is not correct');
      }
  }

// get all returns the pokemonList array
  function getAll() {
    return pokemonList;
  }

// promise function that fetches the pokeapi and adds pokémons to my array
  function loadList() {
    return fetch(apiUrl).then(function (response) {
      return response.json();
    }).then(function (json) {
      json.results.forEach(function (item) {
        let pokemon = {
          name: item.name,
          detailsUrl: item.url
        };
        add(pokemon);
      });
    }).catch(function (e) {
      console.error(e);
    })
  }

  // promise function that gets detailed data about every item (pokémon)
  function loadDetails(item) {
    let url = item.detailsUrl;
    return fetch(url).then(function (response) {
      return response.json();
    }).then(function (details) {
      item.imageUrl = details.sprites.front_default;
      item.height = details.height;
      item.types = [];
        for (var i=0; i < details.types.length; i++) {
          item.types.push(details.types[i].type.name);
        }
    }).catch(function (e) {
      console.error(e);
    });
  }

  // DOM manipulation that creates the buttons and connects to css styling
  function addListItem(pokemon) {
    let pokemonList = document.querySelector('.list-group');
    let pokemonItem = document.createElement('li');
    let button = document.createElement('button');
    button.innerText = pokemon.name;
    button.classList.add('btn', 'btn-light', 'btn-lg', 'pokemon-button');
    button.setAttribute('data-target', '#exampleModal');
    button.setAttribute('data-toggle', 'modal');

    button.addEventListener('click', function() {
      showDetails(pokemon);
    });
    pokemonItem.classList.add('list-group-item', 'align-items-center');

    pokemonItem.appendChild(button);
    pokemonList.appendChild(pokemonItem);
  }

// function that displays the fetched details on the console
  function showDetails(pokemon) {
    pokemonRepository.loadDetails(pokemon).then(function () {
      showModal(pokemon);
    });
  }

  // Modal function
  function showModal(pokemon) {

	let modalBody = $('.modal-body');
	let modalTitle = $('.modal-title');

	//clear modal of existing content

	modalTitle.empty();
	modalBody.empty();

	//create element for Pokemon name in modal
	let nameElement = $('<h1>' + pokemon.name + '</h1>')
	//create element for Pokemon image
  let imageElement = $('<img class="modal-img" style="width:50%"">');
  imageElement.attr('src',pokemon.imageUrl);
  //create element for Pokemon height
  let heightElement = $('<p>' + 'Height : ' + pokemon.height + 'm' + '</p>');
  //create element for Pokemon weight
  let typesElement = $('<p>' + 'Types : ' + pokemon.types + '</p>');
	/* eslint-enable no-undef */

  modalTitle.append(nameElement);
  modalBody.append(imageElement);
  modalBody.append(heightElement);
  modalBody.append(typesElement);
	}

// functions are beaing called, so that we have access to it
  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
    showDetails: showDetails,
    showModal: showModal
  };

})();

/* callback function passes the other two beneath it as values ; forEach function
loops through pokemons to display all buttons with pokémons on the DOM */
pokemonRepository.loadList().then(function() {
  pokemonRepository.getAll().forEach(function(pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});
