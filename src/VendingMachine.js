import { Link } from 'react-router-dom';
import vendingMachine from './images/vending-machine.svg';
import './VendingMachine.css';

const VendingMachine = () => {
  return (
    <div className='VendingMachine'>
      <h1>React Vending Machine</h1>
      <div className='VendingMachine-container'>
        <h4 className='VendingMachine-msg'>
          Hey there! I am a vending machine, what do you want??
        </h4>
        <img
          className='VendingMachine-image'
          src={vendingMachine}
          alt='vending machine'
        />
        <nav className='VendingMachine-nav'>
          <Link className='VendingMachine-nav-item' exact to='/chips'>
            Potato Chips
          </Link>
          <Link className='VendingMachine-nav-item' exact to='/pretzels'>
            Pretzels
          </Link>
          <Link className='VendingMachine-nav-item' exact to='/reeses'>
            Reese's Peanut Butter Cups
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default VendingMachine;
