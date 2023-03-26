import "./App.css";
import { useState } from "react";
import PokemonsList from "./Components/PokemonsList";

function App() {
  let availablePokemonsList = [
    {
      id: 1,
      name: "Bulbasaur",
      cp: 439,
      url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
    },
    {
      id: 2,
      name: "Vulpix",
      cp: 194,
      url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/037.png",
    },
    {
      id: 3,
      name: "Pikachu",
      cp: 455,
      url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png",
    },
    {
      id: 4,
      name: "Gyarados",
      cp: 2243,
      url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/130.png",
    },
  ];

  const [availablePokemons, setAvailablePokemons] = useState(
    availablePokemonsList
  );
  const [chosenPokemons, setChosenPokemons] = useState([]);

  function addToChosenPokemons(pokemon) {
    setChosenPokemons([pokemon, ...chosenPokemons]);
    setAvailablePokemons(
      availablePokemons.filter((ap) => ap.id !== pokemon.id)
    );
    console.log(chosenPokemons);
    console.log(availablePokemons);
  }

  function removeFromChosenPokemons(pokemon) {
    setAvailablePokemons([pokemon, ...availablePokemons]);
    setChosenPokemons(chosenPokemons.filter((cp) => cp.id !== pokemon.id));
  }

  return (
    <div className="App">
      <header>
        <h1>POKÈMON</h1>
      </header>
      <main>
        <h2>Choose your champions</h2>
        <section className="pokemonsContainer">
          <PokemonsList
            pokemons={availablePokemons}
            title="Available Pokémons"
            handleClick={addToChosenPokemons}
          />
          <PokemonsList
            pokemons={chosenPokemons}
            title="Chosen Pokémons"
            handleClick={removeFromChosenPokemons}
          />
        </section>
      </main>
    </div>
  );
}

export default App;
