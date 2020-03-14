import React from "react"
import styled from "styled-components"

const Tips = () => (
  <Hero>
    <HeroGroup>
      <Title>
        Some tips I’d like to share with you. and i'm also working on!
      </Title>
      <Subtitle>
        It is essential to build into the creative process an initial period
        that is open-ended.
      </Subtitle>

      <Subtitle>
        You give yourself time to dream and wander, to start out in a loose and
        unfocused manner. In this period, you allow the project to associate
        itself with certain powerful emotions, ones that naturally come out of
        you as you focus on your ideas.
      </Subtitle>
      <Subtitle>
        Any kind of resistance or obstacle that crosses your path should be seen
        as yet another chance to improve your work.
      </Subtitle>
      <Title>Voice</Title>
      <Subtitle>
        Anyone who spend years absorbing the tecniques and conventions of their
        field, trying them out, mastering them, would inevitably find their
        authentic voice and give birth to something unique and expressive.
      </Subtitle>
      <Title>Mechanical intelligence</Title>
      <Subtitle>
        Whatever you are creating or designing, you must test and use it for
        yourself. Separating out the work will make you lose touch with its
        functionality. Through intense labor on your part, you gain a feel for
        what you are creating.
      </Subtitle>
      <Subtitle>
        In doing this work, you see and feel the flaws in the design. You do not
        look at the parts separately but at how they interact, experiencing what
        you produce as a whole.
      </Subtitle>
      <Subtitle>
        What you are trying to create will not magically take off after a few
        creative bursts of inspiration, but must be slowly evolved through a
        step -by-step process as you correct the flaws.
      </Subtitle>
      <Subtitle>
        In the end, you win through superior craftsmanship, not marketing. This
        craftsmanship involves creating something with an elegant, simple
        structure, getting the most out of your materials, a high form of
        creativity.
      </Subtitle>
      <Subtitle>
        These principles work with the natural bent of your brain, and are to be
        violated at your own peril.
      </Subtitle>
      <Title>The new</Title>
      <Subtitle>
        People are dying for the new, for what expresses the spirit of the time
        in an original way. By creating something new you will create your own
        audience, and attain the ultimate position of power in culture.
      </Subtitle>
      <Title>The creative process</Title>
      <Subtitle>
        Instead of a straight line development from idea to fruition, the
        creative process is more like the crooked branching of a tree.
      </Subtitle>
      <Subtitle>
        What constitutes true creativity is the openness and adaptability of our
        spirit. When we see or experience something we must be able to look at
        it from several angles, to see other possibilities beyond the obvious
        one. We imagine that the objects around us can be used and co-opted for
        different purposes. We do not hold on to our original idea out of sheer
        stubborness, or because our ego is tied with it's rightness.
      </Subtitle>
      <Subtitle>
        Instead, we move with what presents itself to us in the moment,
        exploring and exploiting different branches and contingencies. We thus
        manage to turn feathers into flying material. The difference then is not
        in some initial creative power of the brain, but in how we look at the
        world and the fluidity with which we can reframe what we see.
      </Subtitle>
      <Subtitle>Creativity and adaptability are inseparable.</Subtitle>
      <Title>The learning process</Title>
      <Subtitle>
        You are not in a hurry. You prefer the holistic approach. You look at
        the object of study from as many angles as possible, giving your
        thoughts added dimensions. You assume that the parts of any whole
        interact with one another and cannot be completely separated.
      </Subtitle>
      <Subtitle>
        In your mind, you get as close to the complicated truth and reality of
        you object of study as possible. In the process, great mysteries will
        unravel themselves before your eyes.
      </Subtitle>
      <Title>Creative thinker</Title>
      <Subtitle>
        Your task as a creative thinker is to actively explore the unconscious
        and contradictory parts of your personality, and to examine similar
        contradictions and tensions in the world at large. Expressing these
        tensions within your work in any medium will create a powerful effect on
        others, making them sense unconscious truths or feelings that have been
        obscured or repressed.
      </Subtitle>
      <Subtitle>
        All of these contradictions contain a rich mine of information about a
        reality that is deeper and more complex than the one immediately
        perceived. By delving into the chaotic and fluid zone below the level of
        consciousness where opposites meet, you will be surprised at the
        exciting and fertile ideas that will come bubbling up to the surface.
      </Subtitle>
    </HeroGroup>
  </Hero>
)

export default Tips

const Hero = styled.div`
  margin: 0 auto;
  max-width: 800px;
  background: white;
  padding: 50px 50px;
  display: grid;
  grid-template-columns: repeat(auto-fit, 400px);
  background: rgba(255, 255, 255, 0.8);
  box-shadow: 40px 0px 30px rgba(0, 0, 0, 0.009);
  backdrop-filter: blur(40px);
  /* Note: backdrop-filter has minimal browser support */

  border-radius: 10px;

  @media (max-width: 375px) {
    padding: 0 20px;
    max-width: 240px;
  }
`

const HeroGroup = styled.div`
  width: 700px;

  @media (max-width: 940px) {
    width: 500px;
  }

  @media (max-width: 640px) {
    width: 320px;
  }

  @media (max-width: 375px) {
    width: 280px;
  }
`

const Title = styled.p`
  font-size: 24px;
  font-weight: 600;
`

const Subtitle = styled.p`
  font-size: 17px;
`
