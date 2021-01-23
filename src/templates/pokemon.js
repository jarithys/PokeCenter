import React from 'react'
import { graphql } from "gatsby";
import Layout from "../components/Layout"
import SEO from "../components/Seo"
import { Wrapper, Image } from "./templateStyles/pokemonStyles"


const PokemonTemplate = ({ data: { wpcontent: { pokemon: { pokemon, generations: { edges: generations } } } } }) => {
    return (
        <Layout>
            <SEO title="Pokemon" />
            <Wrapper>
                <div className="pokemon-container">
                    <div className="pokemon-image">
                        <Image fluid={pokemon.pokemonSprite.imageFile.childImageSharp.fluid} alt={pokemon.pokemonSprite.altText} />
                        <div className="generations">
                            {generations.map(({ node: generation }) => (
                                <div className="generation">Generation: {generation.name}</div>
                            ))}
                        </div>
                    </div>
                    <div className="pokemon-info">
                        <h2>#{pokemon.pokemonDexNo} {pokemon.pokemonName}</h2>
                        <h3>The mouse pokemon</h3> {/* CLASIFICATION */}
                        <p className="description">{pokemon.pokemonDexEntry}</p>
                        <p className="info">
                        <strong>Primary in-game type:</strong> {pokemon.pokemonPrimaryType}
                        </p>
                        {pokemon.pokemonSecondaryType ? (
                            <p className="info">
                            <strong>Secondary in-game type:</strong> {pokemon.pokemonSecondaryType}
                            </p>
                        ) : ("")}
                        
                        <p className="info">
                        <strong>Height:</strong> 2m {/* HEIGHT */}
                        </p>
                        <p className="info">
                        <strong>weight:</strong> 156 lbs {/* WEIGHT */}
                        </p>
                    </div>
                </div>
            </Wrapper>
        </Layout>
    )
}

export default PokemonTemplate

export const pageQuery = graphql`
query ($id: ID!) {
    wpcontent {
      pokemon(id: $id, idType: ID) {
        generations {
          edges {
            node {
              name
            }
          }
        }
        pokemon {
          pokemonName
          pokemonDexNo
          pokemonDexEntry
          pokemonPrimaryType
          pokemonSecondaryType
          pokemonSprite {
            altText
            sourceUrl
            imageFile {
              childImageSharp {
                fluid(quality: 100) {
                 ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
        id
      }
    }
  }  
`
