function PokemonCard ({pokemon}) {
  interface Pokemon {
    name : "string";
    imgSrc : "string";

  }
return (
    <>
    <figure>
        {pokemon.imgSrc ? (
<img src = {pokemon.imgSrc} alt="" />)
: (<p>???</p>)}
</figure>
<figcaption>{pokemon.name}</figcaption>
</>
);
}

export default PokemonCard

