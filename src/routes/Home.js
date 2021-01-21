import { memo } from 'react';
import { gql, useQuery } from '@apollo/client';

import Movie from '../components/Movie';

const GET_MOVIES = gql`
  {
    movies {
      id
      medium_cover_image
    }
  }
`;

const Home = () => {
  const { loading, data } = useQuery(GET_MOVIES);

  return (
    <>
      {loading && <div>Loading...</div>}
      {!loading && data?.movies?.map((movie) => <Movie key={movie.id} id={movie.id} />)}
    </>
  );
};

export default memo(Home);
