import Tippy from '@tippyjs/react/headless';
import {useState, useEffect} from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSearch, faCircleXmark} from '@fortawesome/free-solid-svg-icons';
import { SearchPopper } from '~/component/popper';
import useDebounce from '~/hooks';
import className from 'classnames/bind';
import style from '../Header/Header.module.scss';

var cx = className.bind(style)

function Search() {
    
    const [result, setResult] = useState([]);
    const [keySearch, setKey] = useState('');
    const [show, setShow] = useState(false)
    const handleChange = (e) => {setKey(e.target.value)}
    const debounceKey = useDebounce(keySearch, 1000);
    useEffect(()=> {
        if (debounceKey.trim().length < 2) {
            setResult([]);
            return;
        }
        axios.post('http://localhost:8000/searchResult.php', {key: debounceKey})
                .then((result) => {
                    if (result.data === 'no result') setResult([]);
                    else {
                        setResult(result.data);
                    }
                })
                .catch((error)=>{
                    console.log(error);
                })
    },[debounceKey])

    return (  
        <Tippy
            interactive={true}
            visible={show && result.length > 0}
            onClickOutside={()=>setShow(false)}
            placement='bottom'
            render={attrs => (
                <div className="box" tabIndex="-1" {...attrs}>
                <SearchPopper searchResult={result} searchKey={debounceKey}/>
                </div>
            )}>
            <div className={cx('search')}>
                <div className={cx('input')}>
                    <input placeholder='Enter book name' value={keySearch} onFocus={(e)=>setShow(true)} onChange={(e) => handleChange(e)}></input>
                    {keySearch && <button className={cx('clear-btn')} onClick={()=>{setKey(''); setShow(false)}}>
                        <FontAwesomeIcon icon={faCircleXmark}/>
                    </button>}
                    <span/>
                </div>
                <button className={cx('search-btn')}>
                    <FontAwesomeIcon icon={faSearch}/>
                </button>
            </div>
        </Tippy>
    );
}

export default Search;