import React from "react"
import styled from "styled-components"

const Footer = ({ children }) => (
  <FooterGroup>
    <Title>
      There are many paths to mastery, and if you are persistent you will
      certainly find one that suits you. @angelVU
    </Title>
    <Button
      href="https://twitter.com/intent/tweet?screen_name=TwitterDev&ref_src=twsrc%5Etfw"
      class="twitter-mention-button"
      data-show-count="false"
    >
      Tweet to @angelVZUR
    </Button>
    <script
      async
      src="https://platform.twitter.com/widgets.js"
      charset="utf-8"
    ></script>
    {/* <StyledLink
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
    ></script> */}
    <LinkGroup>{/* <Text></Text>
      <Text> Hello There</Text> */}</LinkGroup>
    <CopyRight>{children}</CopyRight>
  </FooterGroup>
)

export default Footer

const CopyRight = styled.div`
  max-width: 500px;
  margin: 0 auto;
  padding: 0 20px;
`

const FooterGroup = styled.div`
  margin: 0 auto;
  padding: 50px 0;
  background: white;
  display: grid;
  grid-gap: 20px;
`
const Title = styled.p`
  font-size: 24px;
  font-weight: 600;

  max-width: 500px;
  margin: 0 auto;

  @media (max-width: 720px) {
    max-width: 300px;
    text-align: center;
  }
`

const Text = styled.p``

const Button = styled.a`
  background: white;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
  border-radius: 8px;
  color: black;
  border: none;
  padding: 18px 60px;
  font-weight: 600;
  font-size: 24px;
  justify-self: center;
  cursor: pointer;
  transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);

  &:hover {
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
    transform: translateY(-3px);
  }
`
const LinkGroup = styled.div`
  width: 500px;
  margin: 50px auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;

  a {
    transition: 0.8s;
  }
`
