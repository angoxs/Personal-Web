import React from "react"
import styled from "styled-components"

const Section = props => (
  <SectionGroup>
    {/* <Image src={require("../images/Rectangle 5.png")} /> */}
    <SectionTitleGroup>
      <SectionTitle>{props.title}</SectionTitle>
      <TextGroup>
        <SectionText>{props.text}</SectionText>
        <Line />
        <SectionText>{props.subtitle}</SectionText>
      </TextGroup>
    </SectionTitleGroup>
    {/* <ImageG src={require("../images/Reading.png")} width="600px" /> */}
  </SectionGroup>
)

export default Section

const SectionGroup = styled.div`
  height: 500px;
  display: grid;
  grid-template-columns: repeat(300px, auto);

  @media (max-width: 720px) {
    grid-template-columns: 1fr;
    height: 800px;
  }
`

const Line = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 3px;
  width: 50%;
`

const TextGroup = styled.div`
  margin: 0 auto;
`

const Image = styled.img`
  position: absolute;
  z-index: -1;
  width: 100%;
`

const SectionTitleGroup = styled.div`
  max-width: 800px;
  display: grid;
  grid-template-columns: repeat(2, auto);
  grid-gap: 80px;
  margin: 0 auto;

  padding: 50px 90px;

  @media (max-width: 720px) {
    grid-template-columns: 1fr;
    padding: 50px 20px;
  }

  @media (max-width: 375px) {
    max-width: 320px;
  }
`

const SectionTitle = styled.p`
  margin: 0;
  font-size: 60px;
  font-weight: 600;
  width: 300px;
  color: white;

  @media (max-width: 1020px) {
    color: black;
  }
`

const SectionText = styled.p`
  font-size: 22px;
  max-width: 600px;
`
