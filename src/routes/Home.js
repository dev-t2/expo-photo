import { memo } from 'react';
import { gql, useQuery } from '@apollo/client';

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

  console.log(loading, data);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (data?.movies) {
    return (
      <div>
        {data.movies.map((movie) => (
          <h1 key={movie.id}>{movie.id}</h1>
        ))}
      </div>
    );
  }

  return <div>Home</div>;
};

export default memo(Home);
