import { Link } from 'react-router-dom';

const Snack = ({ name, url }) => {
  return (
    <div className='Snack'>
      <h1>{name}</h1>
      <img src={url} alt={name} />
      <Link exact to='/'>
        GO BACK
      </Link>
    </div>
  );
};

export default Snack;
