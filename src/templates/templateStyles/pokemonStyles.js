import styled from "styled-components"
import Img from "gatsby-image"
import { Link } from "gatsby"
import { COLORS, FONT_FAMILIES, MEDIA_QUERIES } from "../../constants"

export const Wrapper = styled.div`
  background-color: ${COLORS.BLACK};
  margin-top: 100px;

  .pokemon-container {
    display: flex;
    margin: 3rem auto;
    width: 90%;
    background-color: ${COLORS.GREY};

    @media (max-width: ${MEDIA_QUERIES.MEDIUM}) {
      flex-direction: column;
    }

    .pokemon-image {
      position: relative;
      width: 40vw;
      height: auto;
      margin: 2rem;

      @media (max-width: ${MEDIA_QUERIES.MEDIUM}) {
        height: auto;
        width: auto;
      }

      .generations {
        position: absolute;
        right: 0;
        bottom: 0;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        flex-wrap: wrap;
        color: ${COLORS.SECONDARY};
        font-family: ${FONT_FAMILIES.TITLE};
        background-color: ${COLORS.GREY};
        border-right: solid 10px ${COLORS.PRIMARY};

        @media (max-width: ${MEDIA_QUERIES.MEDIUM}) {
          color: ${COLORS.SECONDARY};
          border-right: none;
          border-bottom: solid 5px ${COLORS.PRIMARY};
        }

        .generation {
          padding: 1rem 1.5rem;
        }
      }
    }

    .pokemon-info {
      display: flex;
      flex-direction: column;
      width: 60vw;
      padding: 1.5rem 2rem;

      @media (max-width: ${MEDIA_QUERIES.MEDIUM}) {
        width: 100%;
      }

      h2 {
        font-family: ${FONT_FAMILIES.TITLE};
        font-size: 2.3rem;
        border-bottom: ${COLORS.WHITE} solid 6px;
        padding-bottom: 1rem;
        margin-left: auto;
        margin-bottom: 0.5rem;

        @media (max-width: ${MEDIA_QUERIES.MEDIUM}) {
          margin-right: auto;
          margin-left: 0;
          font-size: 2.5rem;
        }
      }

      h3 {
        font-family: ${FONT_FAMILIES.TITLE};
        color: ${COLORS.PRIMARY};
        font-size: 1.6rem;
        text-transform: uppercase;
        margin-left: auto;
        margin-bottom: 5rem;

        @media (max-width: ${MEDIA_QUERIES.MEDIUM}) {
          font-size: 1.3rem;
          margin-right: auto;
          margin-left: 0;
          margin-bottom: 1rem;
        }

        span:first-child {
          color: ${COLORS.TERTIARY};
        }
      }

      .description {
        font-size: 1.5rem;
        color: ${COLORS.TERTIARY};

        @media (max-width: ${MEDIA_QUERIES.MEDIUM}) {
          font-size: 1rem;
        }
      }

      .info {
        font-size: 1.5rem;
      }

      p:nth-child(4) {
        font-size: 1.7rem;
        border-bottom: ${COLORS.SECONDARY} solid 4px;
        color: ${COLORS.PRIMARY};
        text-transform: uppercase;
      }
    }
  }

  .pokemon-pictures {
    display: flex;
    width: 100%;
    justify-content: center;
    margin-top: 2rem;

    @media (max-width: ${MEDIA_QUERIES.MEDIUM}) {
      flex-direction: column;
    }

    .pokemon-picture {
      width: 28.5vw;
      height: 57vw;
      margin: 0 1vw;

      @media (max-width: ${MEDIA_QUERIES.MEDIUM}) {
        width: 90vw;
        height: 160vw;
        margin: 2vw auto;
      }
    }
  }
`

export const Image = styled(Img)`
  width: 100%;
  height: 100%;
`
