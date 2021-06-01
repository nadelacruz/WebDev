import React, { useState, useEffect } from 'react';
import uuid from 'uuid/dist/v1';
import NewSongForm from './NewSongForm';

const SongList = () => {
    const [songs, setSongs] = useState([
        { title: `Aphrodite`, id: 1 },
        { title: `Stay`, id: 2 },
        { title: `DYWTBM`, id: 3 },
    ]);
    const [age, setAge] = useState(20);
    const addSong = (title) => {
        setSongs([...songs, {title, id: uuid()}]);
    };
    useEffect(() => {
        console.log("useEffect hook ran", songs);
    }, [songs]);
    return (
        <div className="song-list">
            <ul>
                {songs.map(song => <li key={song.id}>{song.title}</li>)}
            </ul>
            <NewSongForm addSong={addSong}/>
            <button onClick={() => setAge(age + 1)}>Add 1 to Age: {age}</button>
        </div>
    );
}
 
export default SongList;