import { FC, memo, useState } from 'react';
import style from './Search.module.scss';
import searchIcon from '../../../assets/icons/search.svg';

type SearchType = FC<{
    search: (findWord: string) => void; 
}>;

const Search: SearchType = ({ search }) => {
    const [word, SetWord] = useState('');

    const activationSearch = (key : string) => {
        if (key === "Enter") {
            search(word);
        };
    };

    const handleInput = (value: string) => {
        SetWord(value);
    };

    return (
        <div className={style.inputBlock}>
            <input 
                className={style.input} 
                type="text"
                onChange={(event) => handleInput(event.target.value)}
                onKeyDown={(event) => activationSearch(event.key)}/>
            <button className={style.btn}>
                <img className={style.search} src={searchIcon} alt='search'/>
            </button>
        </div>
    );
};

export default memo(Search);
