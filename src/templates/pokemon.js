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
                        <h3>{pokemon.pokemonClassification}</h3>
                        <p className="description">{pokemon.pokemonDexEntry}</p>
                        <p><strong>In-game data</strong></p>
                        <p className="info">
                        <strong>Primary type:</strong> {pokemon.pokemonPrimaryType}
                        </p>
                        {pokemon.pokemonSecondaryType ? (
                            <p className="info">
                            <strong>Secondary type:</strong> {pokemon.pokemonSecondaryType}
                            </p>
                        ) : ("")}
                        <p className="info">
                        <strong>Height:</strong> {pokemon.pokemonHeight} m
                        </p>
                        <p className="info">
                        <strong>Weight:</strong> {pokemon.pokemonWeight} lbs
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
          pokemonClassification
          pokemonHeight
          pokemonWeight
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
