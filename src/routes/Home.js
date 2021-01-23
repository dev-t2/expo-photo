import { memo } from 'react';
import { gql, useQuery } from '@apollo/client';
import styled from 'styled-components';

import Movie from '../components/Movie';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const Header = styled.header`
  background-image: linear-gradient(-45deg, #d754ab, #fd723a);
  height: 45vh;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const Title = styled.h1`
  font-size: 60px;
  font-weight: 700;
  margin-bottom: 20px;
  font-family: 'Roboto', sans-serif;
`;

const SubTitle = styled.h2`
  font-size: 30px;
  font-family: 'Roboto', sans-serif;
`;

const Loading = styled.div`
  font-size: 18px;
  opacity: 0.5;
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  margin-top: 10px;
`;

const Movies = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 25px;
  width: 60%;
  position: relative;
  top: -50px;
`;

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
    <Container>
      <Header>
        <Title>Learn Apollo</Title>
        <SubTitle>Building with React, Apollo and GraphQL</SubTitle>
      </Header>
      {loading && <Loading>Loading...</Loading>}

      <Movies>
        {data?.movies?.map((movie) => (
          <Movie key={movie.id} id={movie.id} bg={movie.medium_cover_image} />
        ))}
      </Movies>
    </Container>
  );
};

export default memo(Home);
