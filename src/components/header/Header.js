import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import PropTypes from "prop-types"
import Menu from "./Menu"
import { HeaderWrapper, Image } from "./headerStyles/headerStyles"

const Header = ({ siteTitle }) => {
  const {
    logo,
    wpcontent: { menuItems },
  } = useStaticQuery(graphql`
  query {
    logo: file(relativePath: {eq: "PokeLogo.png"}) {
      childImageSharp {
        fixed(quality: 100, width: 50) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
    wpcontent {
    menuItems {
      edges {
        node {
          label
          path
        }
      }
    }
  }
  }
`)
  return <HeaderWrapper>
    <Link to="/">
      <Image alt="logo poke center" fixed={logo.childImageSharp.fixed} />
    </Link>
    <Menu menuItems={menuItems.edges} />
  </HeaderWrapper>
}


Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
