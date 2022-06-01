import React from "react";
import { DiFirebase, DiReact, DiZend } from "react-icons/di";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <SectionTitle main>Technologies</SectionTitle>
    <SectionText>
      I'm full-stack developer...But i'm expert in Front-end developer..I Have
      good knowledge React of javaScript library..And I have basic knowledge
      about backend-side...Like node js, express js and MongoDB...I have some
      knowledge also about OOP(Object Oriented Programming) and DSA(Data
      Structure and algorithoms)
    </SectionText>

    <List>
      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <br />
          <ListTitle>Front-End</ListTitle>

          <ListParagraph>
            Experience with <br /> React.js
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiFirebase size="3rem" />
        <ListContainer>
          <br />
          <ListTitle>Back-End</ListTitle>

          <ListParagraph>
            Familiar with <br /> Node.js, Express js & MongoDB
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiZend size="3rem" />
        <ListContainer>
          <br />
          <ListTitle>UI/UX</ListTitle>

          <ListParagraph>
            Experience with <br /> Bootstrap, Tailwind
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
