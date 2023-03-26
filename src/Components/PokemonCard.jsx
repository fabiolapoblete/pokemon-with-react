export default function PokemonCard({ pokemon, handleClick }) {
  return (
    <article className="pokemonCard" onClick={() => handleClick(pokemon)}>
      <img src={pokemon.url} alt="" />
      <section>
        <h4>{pokemon.name}</h4>
        <p>{pokemon.cp} CP</p>
      </section>
    </article>
  );
}
