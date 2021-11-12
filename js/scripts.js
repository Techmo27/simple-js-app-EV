
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

// DOM manipulation that creates the buttons and connects to css styling
  function addListItem(pokemon) {
    let pokemonList = document.querySelector('.pokemon-list');
    let pokemonItem = document.createElement('li');
    let button = document.createElement('button');
    button.innerText = pokemon.name;
    button.classList.add('pokemon-button');
    pokemonItem.appendChild(button);
    pokemonList.appendChild(pokemonItem);
    button.addEventListener('click', function(event) {
      showDetails(pokemon);
    });
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
      item.types = details.types;
    }).catch(function (e) {
      console.error(e);
    });
  }

// function that displays the fetched details on the console
  function showDetails(pokemon) {
    loadDetails(pokemon).then(function () {
      showModal(pokemon);
    });
  }
  let modalContainer = document.querySelector('#modal-container');
  // function which shows content of modalContainer
  function showModal(pokemon) {
    modalContainer.innerHTML = '';
    // clears existing modal content
    let modal = document.createElement('div');
    modal.classList.add('modal');
    //adds new modal content
    let closeButtonElement = document.createElement('button');
    closeButtonElement.classList.add('modal-close');
    closeButtonElement.innerText = 'Close';
    closeButtonElement.addEventListener('click', hideModal);

    let modalTitle = document.createElement('h1');
    modalTitle.innerText = pokemon.name;

    let modalImage = document.create('image-container')
    modalImage.src = pokemon.imageUrl;

    let modalContent = document.createElement ('p');
    modalContent.innerText = 'Height:' + pokemon.height;

    modal.appendChild(closeButtonElement);
    modal.appendChild(modalTitle);
    modal.appendChild(modalImage);
    modal.appendChild(modalContent);
    modalContainer.appendChild(modal);

    modalContainer.classList.add('is-visible');
  }
  // function that removes the modal
  function hideModal() {
    let modalContainer = document.querySelector('#modal-container');
    modalContainer.classList.remove('is-visible');
  }
  // closes the modal when esc is pressed
  window.addEventListener('keydown', (e) => {
  let modalContainer = document.querySelector('#modal-container');
  if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
    hideModal();
    }
  });

  modalContainer.addEventListener('click', (e) => {
  let target = e.target;
  if (target === modalContainer) {
    hideModal();
    }
  });
// functions are beaing called, so that we have access to it
  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
    showDetails: showDetails
  };

})();

/* callback function passes the other two beneath it as values ; forEach function
loops through pokemons to display all buttons with pokémons on the DOM */
pokemonRepository.loadList().then(function() {
  pokemonRepository.getAll().forEach(function(pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});
