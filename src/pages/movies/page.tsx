import React, { Fragment } from "react";
import { RouteComponentProps } from "@reach/router";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";
import * as DiscoverMoviesTypes from "./__generated__/DiscoverMovies";
import { Loading } from "../../components";
import { MovieTile } from "./movie-tile";

enum SORT_DIR {
  ASC,
  DESC
}

export const DISCOVER_MOVIES = gql`
  query DiscoverMovies($input: DiscoverMoviesRequest!) {
    discoverMovies(input: $input) {
      movies {
        id
        backdrop_path
        imdb_id
        title
      }
    }
  }
`;

interface Props extends RouteComponentProps {
  sortDir?: SORT_DIR;
}

export const Movies: React.FC<Props> = ({
  sortDir = SORT_DIR[SORT_DIR.DESC]
}) => {
  const { data, loading, error } = useQuery<DiscoverMoviesTypes.DiscoverMovies>(
    DISCOVER_MOVIES,
    { variables: { input: { sortDir } } }
  );

  if (loading) return <Loading />;
  if (error || !data) return <p>ERROR</p>;

  return (
    <Fragment>
      {data.discoverMovies.movies &&
        data.discoverMovies.movies.map((movie: any) => {
          return <MovieTile key={movie.id} movie={movie} />;
        })}
    </Fragment>
  );
};
