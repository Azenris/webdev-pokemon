import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { useNavigate, useParams } from "react-router-dom";
import pokemonDB from "../data/pokemon.json";
import { PokemonElements, PokemonElementsSoft } from "../components/PokemonElement";
import { PokemonAvailableGameVersionNames, PokemonGameVersionNames } from "../context/PokemonContext";

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
        
        <div className="pokedex-page">
          <table className="pokedex-table">
            <tbody>
              <tr>
                <td>
                  <div className="pokedex-name">{pokemon.name}</div>
                  <div className="pokedex-subscript">POKéMON</div>
                  <div className="pokedex-types">
                    <PokemonElementsSoft types={pokemon.types} />
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="pokemon-image-header">
                    <div className="pokemon-image-block-big">
                        <img className="pokemon-image-big" src={pokemon.imgGBC} alt={pokemon.name} width={pokemon.imgW * 3} height={pokemon.imgH * 3} />
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <table className="pokedex-types-table">
                    <tbody>
                      <tr>
                        <td className="pokedex-types-title">
                          {pokemon.types.length > 1 ? "Types" : "Type"}
                        </td>
                      </tr>
                      <tr>
                        <td className="pokedex-types-name">
                          <PokemonElements types={pokemon.types} />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
              <tr>
                <td>
                  <table className="pokedex-species-table">
                    <tbody>
                      <tr>
                        <td colSpan={2} className="pokedex-species-title">
                          Species
                        </td>
                      </tr>
                      <tr>
                        <td className="pokedex-species-name">
                          {pokemon.species_clean}
                          <br/>
                          ( {pokemon.species} )
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
              <tr>
                <td>
                  <table className="pokedex-info-table">
                    <tbody>
                      <tr>
                        <td colSpan={2} className="pokedex-info-title">Info</td>
                      </tr>
                      <tr>
                        <td className="pokedex-info-name">Dex No.</td>
                        <td className="pokedex-info-value">#{pokemon.id}</td>
                      </tr>
                      <tr>
                        <td className="pokedex-info-name">Height</td>
                        <td className="pokedex-info-value">{pokemon.height}</td>
                      </tr>
                      <tr>
                        <td className="pokedex-info-name">Weight</td>
                        <td className="pokedex-info-value">{pokemon.weight.toFixed(1)} lb</td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
              <tr>
                <td>
                  <table>
                    <tbody>
                      <td>
                        <tr>Available in versions:</tr>
                        {pokemon.available.map((game) => {
                          return (
                            <tr>
                              <img
                                className="poke-card-ball"
                                src={`/imgs/pokeball-${game}.png`}
                                alt={PokemonGameVersionNames[game]}
                                title={PokemonAvailableGameVersionNames[game]}
                                width="24"
                                height="24"
                              />
                              {PokemonGameVersionNames[game]}
                            </tr>
                          );
                        })}
                    </td>
                    </tbody>
                  </table>
                </td>
              </tr>
              <tr className="pokedex-desc">
                <td>
                  <table className="pokedex-desc-table">
                    <tbody>
                      <tr>
                        <td className="pokedex-desc-title">
                          Description
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="pokedex-desc">
                            {pokemon.desc}
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
              <tr className="pokedex-trivia">
                <td>
                  <table className="pokedex-trivia-table">
                    <tbody>
                      <tr>
                        <td className="pokedex-trivia-title">
                          Trivia
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <ul className="pokedex-trivia">
                            {pokemon.trivia.map((trivia) => {
                              return (
                                <li>
                                  {trivia}
                                </li>
                              );
                            })}
                          </ul>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </>
  );
}