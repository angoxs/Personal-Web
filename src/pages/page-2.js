import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Learn from "../components/Learn"
import styled from "styled-components"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <Hero>
      <HeroGroup>
        <Learn
          title="Sense of destiny"
          subtitle="You must also mantain a sense of destiny, and feel continuously connected to it. You are unique
          and there is a purpose to your uniqueness.
          You must see every setback, failure or hardship as a trial along the way, as seeds that are being planted
          for further cultivation, if you know how to grow them.
          "
          image={require("../images/Union.png")}
        />
        <Learn
          title="Life's Taks"
          subtitle="No moment is wasted if you pay atenttion and learn the lessons contained in every experience.
          By constantly applying yourself to the subject that suits your inclinations and attacking it from many different angles, you are simply enriching the ground these seeds to take root."
          image={require("../images/Rectangle 5.png")}
        />
        <Learn
          title="Self-reliance"
          subtitle="You become your own teacher and mentor. You push yourself to learn from every possible source. You read more books than those who have a formal education, develop this into a lifelong habit. As much as possible, you try apply your knowledge in some form of experiment or practice."
          image={require("../images/Rectangle 1.png")}
        />
      </HeroGroup>
    </Hero>
  </Layout>
)

export default SecondPage

const Hero = styled.div`
  height: 920px;
  background-size: cover;

  @media (max-width: 1200px) {
    height: 1000px;
  }

  @media (max-width: 920px) {
    height: 1600px;
  }
`

const HeroGroup = styled.div`
  margin: 0 auto;
  padding: 200px 20px 200px 20px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 40px;
  justify-items: center;

  @media (max-width: 1060px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 720px) {
    grid-template-columns: repeat(1, 1fr);
  }
`
