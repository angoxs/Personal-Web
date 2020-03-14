import React from "react"
import styled from "styled-components"

const LogosBox = props => (
  <Logo>
    <Image src={props.image} width="50" />
    <LogoGroup>
      <Title>{props.title}</Title>
      <Subtitle>{props.text}</Subtitle>
    </LogoGroup>
  </Logo>
)

export default LogosBox

const Logo = styled.div`
  width: 340px;
  height: 180px;
  position: relative;
  overflow: hidden;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(2, auto);
  align-items: center;
  justify-items: center;

  :hover {
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
    transform: translateY(-3px);
    transition: 1s cubic-bezier(0.2, 0.8, 0.2, 1);

    border-radius: 10px;
  }

  @media (max-width: 640px) {
    width: 320px;
  }

  @media (max-width: 375px) {
    width: 100%;
  }
`

const LogoGroup = styled.div`
  display: grid;
  grid-gap: -0px;
`

const Title = styled.p`
  margin: 0;
  font-size: 24px;
  font-weight: 600;
`
const Subtitle = styled.p`
  font-size: 17px;
  color: rgba(0, 0, 0, 0.8);
`
const Image = styled.img`
  padding: 0 20px 0;
`
