import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { useNavigate, useParams } from "react-router-dom";
import pokemonDB from "../data/pokemon.json";
import { PokemonElement } from "../components/PokemonElement";

export function PokemonPage() {

  const navigate = useNavigate();
  const params = useParams();
  const pokemonID = Number(params.id);

  if (isNaN(pokemonID)) {
    navigate("/");
    return (
      <></>
    );
  }

  const pokemon = pokemonDB.find(i => i.id === pokemonID);

  if (!pokemon) {
    navigate("/");
    return (
      <></>
    );
  }

  return (
    <>
      <Navbar />
      <div className="main-content">
        <h1>{pokemon.name}</h1>
        <h2>POKéMON</h2>
        <div className="pokedex-page">

          <div className="pokemon-image-header">
            <div className="pokemon-image-block">
                <img className="pokemon-image" src={pokemon.imgGBC} alt={pokemon.name} width={pokemon.imgW} height={pokemon.imgH} />
            </div>
            <div className="pokemon-image-block-big">
                <img className="pokemon-image-big" src={pokemon.imgGBC} alt={pokemon.name} width={pokemon.imgW * 3} height={pokemon.imgH * 3} />
            </div>
          </div>

          <div>
            <div>
              Its POKéDEX number is #{pokemon.id}.
            </div>
            <br />
            <div>
              This POKéMON has the {pokemon.types.length > 1 ? "types" : "type"}{' '}
              <span className="poke-card-element">
                {pokemon.types.map((type, index) => {
                  return (
                    <span key={index}>
                      {index != 0 && '/'}
                      <PokemonElement type={type}/>
                    </span>
                  );
                })}
              </span>.
            </div>
            <br />
            <div className="pokedex-desc">
              {pokemon.desc}
            </div>
          </div>

        </div>
      </div>
      <Footer />
    </>
  );
}