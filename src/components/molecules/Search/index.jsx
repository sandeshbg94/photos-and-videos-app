import React, {useState} from 'react';
import {useMedia} from '../../../providers/MediaProvider';
import './styles.css';

const Search = (props) => {
    const [searchText, setText] = useState("");
    const {setSearchTerm} = useMedia();

    const onTextChange = (e) => {
        setText(e.target.value);
    }

    const onSearch = () => {
        setSearchTerm(searchText);
    };

    return (
        <div className="searchContainer">
            <input type="text" placeholder="Search photos,videos,artists" className="inputBox" onChange={onTextChange}/>
            <button type="button" className="button" onClick={onSearch}>SEARCH</button>
        </div>
    )
}

export { Search };