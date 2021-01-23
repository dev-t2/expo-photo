import { gql, useMutation } from '@apollo/client';
import { memo } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  height: 400px;
  border-radius: 8px;
  width: 100%;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  background-color: transparent;
`;

const Poster = styled.div`
  background-image: url(${(props) => props.bg});
  height: 100%;
  width: 100%;
  background-size: cover;
  background-position: center center;
  border-radius: 8px;
`;

const LIKE_MOVIE = gql`
  mutation toggleLikeMovie($id: Int!, $isLiked: Boolean!) {
    toggleLikeMovie(id: $id, isLiked: $isLiked) @client
  }
`;

const Movie = ({ id, bg, isLiked }) => {
  const [toggleLikeMovie] = useMutation(LIKE_MOVIE, { variables: { id: parseInt(id), isLiked } });

  return (
    <Container>
      <Link to={`/${id}`}>
        <Poster bg={bg} />
      </Link>
      <button onClick={toggleLikeMovie}>{isLiked ? 'Unlike' : 'Like'}</button>
    </Container>
  );
};

export default memo(Movie);
