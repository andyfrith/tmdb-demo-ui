import React from "react";
import styled, { css } from "react-emotion";
import { Link } from "@reach/router";
import { unit, colors } from "../../styles";

const MOVIEDB_IMG_URL = "https://image.tmdb.org/t/p/original";

export function getBackgroundImage(backdrop_path: string) {
  return `url(${MOVIEDB_IMG_URL}/${backdrop_path})`;
}

interface Props {
  movie: any;
}

export const MovieTile: React.FC<Props> = ({ movie }) => {
  const { backdrop_path, id, title } = movie;
  return (
    <StyledLink
      to={`/movie/${id}`}
      style={{
        backgroundImage: getBackgroundImage(backdrop_path)
      }}
    >
      <MovieTitle>{title}</MovieTitle>
    </StyledLink>
  );
};

export const cardClassName = css({
  padding: `${unit * 4}px ${unit * 5}px`,
  borderRadius: 7,
  color: "white",
  backgroundSize: "cover",
  backgroundPosition: "center"
});

const padding = unit * 2;

const StyledLink = styled(Link)(cardClassName, {
  display: "block",
  height: 193,
  marginTop: padding,
  textDecoration: "none",
  ":not(:last-child)": {
    marginBottom: padding * 2
  }
});

const MovieTitle = styled("h5")({
  backgroundColor: colors.primary,
  opacity: 0.6
});
