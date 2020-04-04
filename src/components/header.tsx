import React from "react";
import styled from "react-emotion";
import { unit } from "../styles";

interface Props {
  children?: any;
}

export const Header: React.FC<Props> = ({ children = "Discover Movies" }) => {
  return (
    <Container>
      <div>
        <h2>{children}</h2>
      </div>
    </Container>
  );
};

const Container = styled("div")({
  display: "flex",
  alignItems: "center",
  marginBottom: unit * 4.5
});
