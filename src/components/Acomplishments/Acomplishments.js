import React from "react";

import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { Box, Boxes, BoxNum, BoxText } from "./AcomplishmentsStyles";

const data = [
  {
    number: 20,
    name: "The Web Developer Bootcamp, Colt-steele",
    website: "Udemy",
    text: "Open Source Projects",
  },
  {
    number: 20,
    name: "The Complate javaScript Course, jonas Schmedtmann",
    website: "Udemy",
    text: "Students",
  },
  {
    number: 20,
    name: "Modern React with Redux, Stephen grider",
    website: "Udemy",
    text: "Github Followers",
  },
  {
    number: 20,
    name: "Node js, Express js,MongoDB & More:The Complate Bootcamp.. jonas Schmedtmann",
    website: "Udemy",
    text: "Github Stars",
  },
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Completed All development Courses</SectionTitle>
    <Boxes>
      {data.map((card, index) => {
        <Box key={index}>
          <BoxNum>{card.number}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>;
      })}
    </Boxes>
  </Section>
);

export default Acomplishments;
