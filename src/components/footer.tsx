import React from "react";
import styled from "react-emotion";
import { ReactComponent as TmdbImage } from "../assets/images/tmdb_logo.svg";
import { colors, unit } from "../styles";

const tmdbNotice: string =
  "This product uses the TMDb API but is not endorsed or certified by TMDb.";

export const Footer = () => {
  return (
    <Container>
      <InnerContainer>
        <TmdbNotice>
          <TmdbImage style={{ width: 154, height: 20 }} />
          {tmdbNotice}
        </TmdbNotice>
      </InnerContainer>
    </Container>
  );
};

const Container = styled("footer")({
  flexShrink: 0,
  marginTop: "auto",
  backgroundColor: colors.primary,
  color: colors.textSecondary,
  position: "sticky",
  bottom: 0
});

const InnerContainer = styled("div")({
  display: "flex",
  alignItems: "center",
  maxWidth: 560,
  padding: unit * 2.5,
  margin: "0 auto"
});

const TmdbNotice = styled("div")({
  fontSize: 12
});
