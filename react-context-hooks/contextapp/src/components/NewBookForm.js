import React, { useState, useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

const NewBookForm = ({ addBook }) => {
    const [title, setTitle] = useState(``);
    const { isLightTheme, light, dark } = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;
    const handleSubmit = (e) => {
        e.preventDefault();
        addBook(title);
        setTitle(``);
    }
    return (
        <form onSubmit={handleSubmit} style={{background: theme.ui, marginTop: -40, padding: 10, color: theme.syntax}}>
            <label>Enter Book Title:</label>
            <input type="text" value={title} required onChange={(e) => setTitle(e.target.value)} style={{padding: 10, borderRadius: 10}}/>
            <input type="submit" value="Add Book"/>
        </form>
    );
}
 
export default NewBookForm;