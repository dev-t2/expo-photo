import { memo } from 'react';
import { useParams } from 'react-router-dom';
import { gql, useQuery } from '@apollo/client';
import styled from 'styled-components';

const Container = styled.div`
  height: 100vh;
  background-image: linear-gradient(-45deg, #d754ab, #fd723a);
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: white;
`;

const Column = styled.div`
  margin-left: 10px;
  width: 50%;
`;

const Title = styled.h1`
  font-size: 66px;
  margin-bottom: 16px;
  font-family: 'Roboto', sans-serif;
`;

const SubTitle = styled.h2`
  font-size: 36px;
  margin-bottom: 10px;
  font-family: 'Roboto', sans-serif;
`;

const Description = styled.p`
  font-size: 28px;
  font-family: 'Roboto', sans-serif;
`;

const Poster = styled.div`
  width: 25%;
  height: 60%;
  background-color: transparent;
  background-image: url(${(props) => props.bg});
  background-size: cover;
  background-position: center center;
`;

const GET_MOVIE = gql`
  query getMovie($id: Int!) {
    movie(id: $id) {
      id
      title
      rating
      description_intro
      language
      medium_cover_image
      genres
      isLiked @client
    }
    suggestions(id: $id) {
      id
      medium_cover_image
    }
  }
`;

const Detail = () => {
  const { id } = useParams();
  const { loading, data } = useQuery(GET_MOVIE, {
    variables: { id: parseInt(id) },
  });

  return (
    <Container>
      <Column>
        <Title>
          {loading
            ? 'Loading...'
            : `${data.movie.title} (${data.movie.isLiked ? 'Liked' : 'Unliked'})`}
        </Title>
        <SubTitle>
          {data?.movie?.language.toUpperCase()} {data?.movie?.rating}
        </SubTitle>
        <Description>{data?.movie?.description_intro}</Description>
      </Column>
      <Poster bg={data?.movie?.medium_cover_image} />
    </Container>
  );
};

export default memo(Detail);
