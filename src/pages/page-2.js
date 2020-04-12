import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Learn from "../components/Learn"

const SecondPage = () => (
  <Layout>
    <SEO title="Playground" />
    <Hero>
      <HeroGroup>
        <Text> Playground</Text>
        <Subtitle>
          The Playground, designed by non-profit organization to be accesible to
          all students
        </Subtitle>
        <Button>Start Now</Button>
      </HeroGroup>
      <Cards>
        <Learn
          title="SwiftUI Animations"
          subtitle="Learn the most advanced & latest SwiftUI Animations you could posibly imagine.
          "
          image={require("../images/Reading.png")}
        />
      </Cards>
    </Hero>
  </Layout>
)

export default SecondPage

const Hero = styled.div`
  height: 1020px;
`
const HeroGroup = styled.div`
  margin: 0 auto;
  max-width: 600px;
  padding: 150px 50px;
  text-align: center;
`

const Text = styled.h1`
  font-size: 70px;
  font-weight: 800;
`

const Button = styled.a`
  padding: 12px 35px;
  background: #6b48ff;
  color: white;
  border-radius: 22px;
  cursor: pointer;
`

const Subtitle = styled.p`
  font-size: 26px;
  color: rgba(0, 0, 0, 0.8);
  margin-bottom: 30px;
`

const Cards = styled.div``
