import React from 'react'
import Book from './Book'

function RenderingLists() {
  const bookList = [
    'To kill a mockingbird', 
    'The Great Gatsby', 
    'The catcher in the rye.'
  ]
  const books = [
    {
      title : 'To kill a mockingbird', 
      author : 'Harper Lee',
      pages : '281'
    },
    {
      title : 'The Great Gatsby', 
      author : 'Fuck Scott Fitzgerald',
      pages : '218'
    },
    {
      title : 'The catcher in the rye', 
      author : 'J. d salinger',
      pages : '234'
    },
  ]
  return (
    <div>
      {bookList.map(book => {
        return <h2>{book}</h2>
      })}
      <hr />
      {
        books.map(book => {
          return <div>
            <h5>{book.title}</h5>
            <p>{book.author}</p>
            <p>{book.pages}</p>
          </div>
        })}
      <hr />
      {
        books.map(book => {
          return <Book book={book}/>
        })
      }
    </div>

  )
}

export default RenderingLists