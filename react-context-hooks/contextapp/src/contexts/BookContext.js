import React, { createContext, useState } from 'react';
import uuid from 'uuid/dist/v1';
import NewBookForm from '../components/NewBookForm';

export const BookContext = createContext();

const BookContextProvider = (props) => {
    const [books, setBooks] = useState([
        {title: `Man's Search for Meaning`, id: 1},
        {title: `Meditations`, id: 2},
        {title: `Psycho-Cybernetics`, id: 3},
    ]);
    const addBook = (newTitle) => {
        setBooks([...books, {title: newTitle, id: uuid()}]);
    }
    return (
        <BookContext.Provider value={{books}}>
            {props.children}
            <NewBookForm addBook={addBook}/>
        </BookContext.Provider>
    );
}
 
export default BookContextProvider;