import PokemonCard from "./PokemonCard";

export default function PokemonsList({ pokemons, title, handleClick }) {
  function cpCalculation() {
    let totalCp = 0;
    pokemons.forEach((pokemon) => {
      totalCp += pokemon.cp;
    });
    return totalCp;
  }

  return (
    <section className="pokemonsLists">
      <h3>{title}</h3>
      {pokemons.map((pokemon, i) => (
        <PokemonCard key={i} pokemon={pokemon} handleClick={handleClick} />
      ))}
      <h4>Total CP: {cpCalculation()}</h4>
    </section>
  );
}
