import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSearch, faCircleXmark} from '@fortawesome/free-solid-svg-icons';
import className from 'classnames/bind';
import style from '../Header/Header.module.scss';

var cx = className.bind(style)

function Search() {
    return (  
        <div className={cx('search')}>
            <div className={cx('input')}>
                <input placeholder='Enter book name'></input>
                <button className={cx('clear-btn')}>
                    <FontAwesomeIcon icon={faCircleXmark}/>
                </button>
                <span/>
                </div>
                    <button className={cx('search-btn')}>
                        <FontAwesomeIcon icon={faSearch}/>
                    </button>
                </div>
    );
}

export default Search;