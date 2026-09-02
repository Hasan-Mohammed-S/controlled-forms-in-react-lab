import { useState } from 'react';

const Bookshelf = () => {
  // 2. Define the initial state
  const [books, setBooks] = useState([
    { title: 'Fourth Wing', author: 'Rebecca Yarros' },
    { title: 'The Lion, the Witch and the Wardrobe', author: 'C.S. Lewis' },
  ]);

  const [newBook, setNewBook] = useState({
    title: '',
    author: '',
  });

  // 3. Create event handlers
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewBook({ ...newBook, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setBooks([...books, newBook]);
    setNewBook({ title: '', author: '' });
  };

  return (
    <div className="bookshelfDiv">
      <div className="formDiv">
        <h3>Add a Book</h3>
        {/* 4. Form creation */}
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="title">Title: </label>
            <input
              id="title"
              name="title"
              type="text"
              value={newBook.title}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="author">Author: </label>
            <input
              id="author"
              name="author"
              type="text"
              value={newBook.author}
              onChange={handleInputChange}
            />
          </div>
          <button type="submit">Add Book</button>
        </form>
      </div>

      <div className="bookCardsDiv">
        {/* 5. Map through your books */}
        {books.map((book, index) => (
          <div key={index} className="bookCard">
            <h4>{book.title}</h4>
            <p>By: {book.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bookshelf;