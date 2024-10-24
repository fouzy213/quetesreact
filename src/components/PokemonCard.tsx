interface Pokemon {
  userInfo :{
  name : "string";
  imgSrc? : "string";
  };
}
function PokemonCard ({userInfo}:Pokemon) {
return (
    <>
    <figure>
        {userInfo.imgSrc ? (
<img src = {userInfo.imgSrc} alt="" />)
: (<p>???</p>)}
</figure>
<figcaption>{userInfo.name}</figcaption>
</>
);
}

export default PokemonCard

