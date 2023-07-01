import { NavLink, Outlet, useNavigate } from 'react-router-dom';

function BookLayout() {
  const navigate = useNavigate();

  const navigateToBook = () => {
    navigate('/books/3');
  };
  return (
    <>
      <h2>This is a common layout for books</h2>
      <nav>
        <ul>
          <li>
            <NavLink
              to='/books/1'
              style={({ isActive }) => ({ color: isActive ? 'red' : 'black' })}
            >
              Book 1
            </NavLink>
          </li>
          <li>
            <NavLink to='/books/2'>Book 2</NavLink>
          </li>
          <li>
            <button onClick={navigateToBook}>Book 3 (Manual Naviagtion)</button>
          </li>
          <li>
            <NavLink to='/books/new'>Create NewBook</NavLink>
          </li>
          <li>
            <NavLink to='/books/search'>Search Book</NavLink>
          </li>
        </ul>
      </nav>
      <Outlet context={{ hello: 'world' }} />
    </>
  );
}

export default BookLayout;
