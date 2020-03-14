import React from "react"
import styled from "styled-components"

const Learn = props => (
  <CardGroup>
    {/* <Image src={props.image} /> */}
    <Title>{props.title}</Title>
    <Subtitle>{props.subtitle}</Subtitle>
  </CardGroup>
)

export default Learn

const CardGroup = styled.div`
  width: 350px;
  height: 420px;
  position: relative;
  overflow: hidden;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
  border-radius: 20px;
  transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
  cursor: pointer;

  :hover {
    transform: scale(1.1, 1.1);
    box-shadow: 0 30px 60px rgba(0, 0, 0, 0.5);
  }

  @media (max-width: 375px) {
    width: 300px;
    height: 350px;
  }
`

const Title = styled.h3`
  margin: 50px 0 0 30px;
  font-size: 30px;
`

const Subtitle = styled.p`
  margin: 10px 0 30px 30px;
  width: 300px;
`

const Image = styled.img`
  height: 110%;
  position: absolute;
  top: 0;
  z-index: -1;
  transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);

  :hover {
    transform: translateY(-20px);
  }
`
