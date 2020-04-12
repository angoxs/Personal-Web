import React from "react"
import styled from "styled-components"

const Learn = props => (
  <Card>
    <TitleGroup>
      <Caption>10 MORE COMING</Caption>

      <Title>{props.title}</Title>
      <Subtitle>{props.subtitle}</Subtitle>
      {/* <Button>Read more</Button> */}
    </TitleGroup>
    <ImageGroup>
      <Image src={props.image} />
    </ImageGroup>
  </Card>
)

export default Learn

const Card = styled.div`
  max-width: 70%;
  background: white;
  margin: 0 auto;
  padding: 0 20px;
  display: grid;
  align-items: center;
  justify-content: center;
  border-radius: 20px;

  grid-template-columns: repeat(auto-fit, 400px);

  transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
  /* height: 225px; */
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
`

const Button = styled.a`
  padding: 12px 35px;
  background: #6b48ff;
  color: white;
  border-radius: 22px;
  cursor: pointer;
`

const TitleGroup = styled.div`
  @media (max-width: 1160px) {
    text-align: center;
    padding: 20px 40px;
  }
`

const ImageGroup = styled.div``

const Caption = styled.p`
  font-size: 18px;
  color: rgba(0, 0, 0, 0.7);
  color: #a898ea;
`

const Title = styled.h3`
  font-size: 30px;
  font-weight: 800;
  margin-bottom: -10px;
`

const Subtitle = styled.p`
  font-size: 22px;
  color: rgba(0, 0, 0, 0.8);
  margin-bottom: 40px;
`

const Image = styled.img`
  width: 450px;
`
