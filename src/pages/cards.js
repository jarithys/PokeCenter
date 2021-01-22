import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/Seo"
import { Wrapper, Image, BottomEdgeDown, Pokemon, BottomEdgeUp } from "./pageStyles/pageStyles"
import { COLORS } from "../constants"

const PokemonsPage = () => {
  const {
    wpcontent: {
      page: {
        pokemonMeta: {
          pokemonPageDescription,
          pokemonPageBannerImage
        }
      },
      pokemons: { edges: pokemons }
    }
  } = useStaticQuery(graphql`
    query {
      wpcontent {
        page(id: "cards", idType: URI) {
          pokemonMeta {
            pokemonPageDescription
            pokemonPageBannerImage {
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
        }
        pokemons(first: 50) {
          edges {
            node {
              pokemon {
                pokemonDexNo
                pokemonName
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
              slug
            }
          }
        }
      }
    }
  `)

  // console.log(data)

  return (
    <Layout>
      <SEO title="Cards" />
      <Wrapper pokemonColor={COLORS.BLACK}>
        <div className="banner">
          <Image fluid={pokemonPageBannerImage.imageFile.childImageSharp.fluid} alt={pokemonPageBannerImage.altText} />
          <BottomEdgeDown color={COLORS.BLACK} />
        </div>
        <div className="description">
          <h2>Pokemon TCG</h2>
          <p>{pokemonPageDescription}</p>
          <BottomEdgeUp color={COLORS.PRIMARY} />
        </div>
        <div className="pokemons">
          <h2>Available Pokemon Cards</h2>
          <div className="pokemon-items">
            {pokemons.map(({node: {pokemon, slug}}) => (
              <Pokemon to={`/${slug}`} key={slug}>
                <Image fluid={pokemon.pokemonSprite.imageFile.childImageSharp.fluid} alt={pokemon.pokemonSprite.altText} />
                <div className="pokemon-info">
                  <p>{pokemon.pokemonName}</p>
                  <p>Dex. {pokemon.pokemonDexNo}</p>
                </div>
              </Pokemon>
            ))}
          </div>
        </div>
      </Wrapper>
    </Layout>
  )
}

export default PokemonsPage
