import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import "../components/Header.css"

class Header extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      hasScrolled: false,
    }
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll)
  }

  handleScroll = event => {
    const scrollTop = window.pageYOffset

    if (scrollTop > 50) {
      this.setState({ hasScrolled: true })
    } else {
      this.setState({ hasScrolled: false })
    }
  }

  render() {
    return (
      <div className={this.state.hasScrolled ? "Head HeaderScrolled" : "Head"}>
        <HeaderGroup>
          <Link to="/">AngelVU.</Link>
          <Link to="/page-2">Works</Link>
          <Button>
            <ButtonLogo src={require("../images/Email.png")} width="30" />
            <StyledLink href="mailto:angelCL0@outlook.com">
              Let's chat
            </StyledLink>
          </Button>
        </HeaderGroup>
      </div>
    )
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

const StyledLink = styled.a``

const ButtonLogo = styled.img``

const Button = styled.div`
  padding: 12px 25px;
  font-size: 20px;
  color: white;
  background: white;
  /* background: #a72cd6; */
  font-weight: 700px;
  border-radius: 8px;
  border: none;
  outline: none;
  cursor: pointer;
  transition: 1s cubic-bezier(0.2, 0.8, 0.2, 1);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.25);
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(2, auto);
  align-items: center;
  justify-items: center;

  :hover {
    background: white;
    color: white;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.25);
    transform: translateY(-3px);
  }
`

// const Head = styled.div`
//   position: fixed;
//   width: 100%;
//   padding: 40px 0;
//   z-index: 100;
//   background: rgba(255, 255, 255, 0.8);
//   box-shadow: 40px 0px 30px rgba(0, 0, 0, 0.009);
//   backdrop-filter: blur(10px);

//   @media (max-width: 640px) {
//     padding: 15px 0;
//   }
// `

const HeaderGroup = styled.div`
  max-width: 800px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, auto);
  align-items: center;
  justify-items: center;

  @media (max-width: 640px) {
    grid-template-columns: repeat(2, auto);

    a:nth-child(2) {
      display: none;
    }
  }
`
