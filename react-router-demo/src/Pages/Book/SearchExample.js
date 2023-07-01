import { useNavigate, useSearchParams } from 'react-router-dom';
function SearchExample() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams({ id: 3 });
  const number = searchParams.get('id');
  const searchBook = () => {
    navigate('/books/' + searchParams.get('id'));
  };
  return (
    <div>
      <input
        type='number'
        value={number}
        onChange={(event) => setSearchParams({ id: event.target.value })}
      />
      <button onClick={searchBook}>search</button>
    </div>
  );
}
export default SearchExample;
