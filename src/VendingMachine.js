import { Link } from 'react-router-dom';

const VendingMachine = () => {
  return (
    <div className='Vending-Machine'>
      <h1>Vending Machine</h1>
      <Link exact to='/chips'>
        Potato Chips
      </Link>
      <Link exact to='/pretzels'>
        Pretzels
      </Link>
      <Link exact to='/reeses'>
        Reese's Peanut Butter Cups
      </Link>
    </div>
  );
};

export default VendingMachine;
