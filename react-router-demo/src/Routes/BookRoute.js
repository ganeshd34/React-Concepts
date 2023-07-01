import { Routes, Route } from 'react-router-dom';
import Book from '../Pages/Book/Book';
import BookList from '../Pages/Book/BookList';
import NewBook from '../Pages/Book/NewBook';
import BookLayout from '../Layouts/BookLayout';
import NotFound from '../Pages/NotFound/NotFound';
import SearchExample from '../Pages/Book/SearchExample';
function BookRoute() {
  return (
    <Routes>
      <Route element={<BookLayout />}>
        <Route index element={<BookList />} />
        <Route path=':id' element={<Book />} />
        <Route path='new' element={<NewBook />} />
        <Route path='search' element={<SearchExample/>}/>
        <Route path='*' element={<NotFound />} />
      </Route>
    </Routes>
  );
}
export default BookRoute;
