import React from 'react';
import { useParams, useOutletContext } from 'react-router-dom';

function Book() {
  const { id } = useParams();
  const context = useOutletContext();
  return (
    <h2>
      Book {id} - {context.hello}
    </h2>
  );
}
export default Book;
