import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import NotFound from './Pages/NotFound/NotFound';
import OtherLayout from './Layouts/OtherLayout';
import Contact from './Pages/Contact/Contact';
import BookRoute from './Routes/BookRoute';

function App() {
  return (
    <div className='App'>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/contact'>Contact</Link>
          </li>
          <li>
            <Link to='/books'>Books</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/books/*' element={<BookRoute />}/>
        <Route element={<OtherLayout />}>
          <Route path='/contact' element={<Contact />} />
          <Route path='/about' element={<About />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
