import { memo } from 'react';
import { Link } from 'react-router-dom';

const Movie = ({ id }) => {
  return (
    <div>
      <Link to={`/${id}`}>{id}</Link>
    </div>
  );
};

export default memo(Movie);
