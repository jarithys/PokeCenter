import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/Seo"
import {Wrapper, Image, BottomEdgeDown, Pokemon, BottomEdgeUp} from "./pageStyles/pageStyles"
import {COLORS} from "../constants"



const IndexPage = () => {
  const {
    wpcontent: {
      page: {
        homeMeta: {
          homePageDescription,
          homePageFeaturedProducts,
          homePageHeaderImage,
          homePageHeaderTitle,
        }
      }
    }
  } = useStaticQuery(graphql`
  query {
    wpcontent {
      page(id: "home-page", idType: URI) {
        homeMeta {
          homePageDescription
          homePageHeaderTitle
          homePageHeaderImage {
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
          homePageFeaturedProducts {
            ... on WPGraphql_Pokemon {
              slug
              pokemon {
                pokemonName
                pokemonDexNo
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
            }
          }
        }
      }
    }
  }
  `);
  // console.log(data)

  return (
    <Layout>
      <SEO title="Home" />
      <Wrapper>
        <div className="banner">
          <Image fluid={homePageHeaderImage.imageFile.childImageSharp.fluid} alt={homePageHeaderImage.altText} />
          <div className="inner-div">
            <p className="header-title">{homePageHeaderTitle}</p>
            {/* <p className="header-description">{homePageDescription}</p> */}
          </div>
          <BottomEdgeDown color={COLORS.BLACK} />
        </div>
        <div className="description">
          <p>{homePageDescription}</p>
          <BottomEdgeUp color={COLORS.PRIMARY} />
        </div>
        <div className="pokemons">
          <h2>Featured Cards</h2>
          <div className="pokemon-items">
            {homePageFeaturedProducts.map(({pokemon, slug}) => (
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


export default IndexPage
