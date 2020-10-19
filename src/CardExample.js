import React from "react";
import styled from "styled-components";
import Card from "./Card";
import logo from "./lizard.jpg";

const CardExample = () => (
  <Container>
    <Card
      image={logo}
      title="Lizard"
      description="Lizards are widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"
      size="M"
    />
    <Card
      image={logo}
      title="Lizard"
      description="Lizards are widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"
      size="M"
    />
    <Card
      image={logo}
      title="Lizard"
      description="Lizards are widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"
      size="M"
    />
    <Card
      image={logo}
      title="Lizard"
      description="Lizards are widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"
      size="M"
    />
  </Container>
);

const Container = styled.div`
  display: grid;
  padding: 24px;
  column-gap: 24px;
  row-gap: 32px;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  @media (max-width: 1000px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media (max-width: 700px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;

export default CardExample;
