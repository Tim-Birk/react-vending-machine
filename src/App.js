import VendingMachine from './VendingMachine';
import { BrowserRouter, Route } from 'react-router-dom';
import Snack from './Snack';
import './App.css';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Route exact path='/'>
          <VendingMachine />
        </Route>
        <Route exact path='/chips'>
          <Snack
            name='Potato Chips'
            url='https://media.giphy.com/media/xT39Dl1AHieEwAobq8/giphy.gif'
          />
        </Route>
        <Route exact path='/pretzels'>
          <Snack
            name='Pretzels'
            url='https://media.giphy.com/media/l0Ex5cj3jF05FTVXq/giphy.gif'
          />
        </Route>
        <Route exact path='/reeses'>
          <Snack
            name="Reese's Peanut Butter Cups"
            url='https://media.giphy.com/media/ndnynyuXAroti/giphy.gif'
          />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
