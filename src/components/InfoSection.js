import React from "react"
import styled from "styled-components"
import SvgReading from "./SvgReading"
import { Link } from "gatsby"

const InfoSection = () => (
  <InfoGroup>
    <SectionTitleGroup>
      <Title>Mastery</Title>
      <Subtitle>
        There are many paths to mastery, and if you are persistent you will
        certainly find one that suits you.
      </Subtitle>
      <StyledLink
        href="https://twitter.com/intent/tweet?screen_name=TwitterDev&ref_src=twsrc%5Etfw"
        class="twitter-mention-button"
        data-show-count="false"
      >
        Tweet to @angelVZUR
      </StyledLink>
      <script
        async
        src="https://platform.twitter.com/widgets.js"
        charset="utf-8"
      ></script>
    </SectionTitleGroup>
  </InfoGroup>
)

export default InfoSection

const InfoGroup = styled.div`
  height: 500px;
`

const StyledLink = styled.a`
  color: white;
  background: linear-gradient(104deg, #d667ff 100%, #8b0eba 100%);
  padding: 12px 35px;
  border-radius: 8px;

  :hover {
    background: white;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.25);
    transform: translateY(-3px);
    background: white;
    color: black;
  }
`

const SectionTitleGroup = styled.div`
  margin: 0 auto;
  padding: 50px 150px;
  max-width: 600px;
  text-align: center;

  @media (max-width: 820px) {
    margin: 0 auto;
  }
`

const Title = styled.h3`
  font-size: 50px;
  font-weight: 700;
  margin: 0;

  background: linear-gradient(104deg, #d667ff 100%, #a629d5 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: 820px) {
    font-size: 40px;
  }
`

const Subtitle = styled.p`
  font-size: 24px;

  @media (max-width: 820px) {
    font-size: 18px;
  }
`
