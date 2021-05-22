import './App.css';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import ProductScreen from './screens/ProductScreen';
import HomeScreen from './screens/HomeScreen';

function App() {
  const openMenu = () => {
    document.getElementById('mySidebar').style.width = '250px';
  };

  const closeMenu = () => {
    document.getElementById('mySidebar').style.width = '0';
  };

  return (
    <BrowserRouter>
      <div className='grid-container'>
        <header className='header'>
          <div className='brand'>
            <button onClick={openMenu}>&#9776;</button>
            <Link to='/'>AmazeKart</Link>
          </div>
          <div className='header-links'>
            <a href='cart.html'>Cart</a>
            <a href='signin.html'>Sign IN</a>
          </div>
        </header>

        <aside id='mySidebar' className='sidebar'>
          <h3>Shopping Categories</h3>

          <button className='sidebar-close-button' onClick={closeMenu}>
            &times;
          </button>

          <ul>
            <li>
              <a href='index.html'> Pants</a>
            </li>
            <li>
              <a href='index.html'> Shirts </a>
            </li>
          </ul>
        </aside>

        <main className='main'>
          <div className='content'>
            <Route path='/product/:id' component={ProductScreen} />
            <Route path='/' exact={true} component={HomeScreen} />
          </div>
        </main>

        <footer className='footer'>All rights reserved</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
