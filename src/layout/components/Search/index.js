import Tippy from '@tippyjs/react/headless';
import {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSearch, faCircleXmark} from '@fortawesome/free-solid-svg-icons';
import { SearchPopper } from '~/component/popper';
import className from 'classnames/bind';
import style from '../Header/Header.module.scss';

var cx = className.bind(style)

function Search() {
    const searchResult = [
        {name: 'Date a live',
        photoUrl: 'https://upload.wikimedia.org/wikipedia/vi/thumb/9/9b/Hanh_trinh_cua_Elaina_quyen_1.png/220px-Hanh_trinh_cua_Elaina_quyen_1.png',
        price: 80000, href: ''},
        {name: 'Date a live',
        photoUrl: 'https://upload.wikimedia.org/wikipedia/vi/thumb/9/9b/Hanh_trinh_cua_Elaina_quyen_1.png/220px-Hanh_trinh_cua_Elaina_quyen_1.png',
        price: 80000, href: ''},
        {name: 'Date a live, công cha như núi thái sơn, nghĩa mẹ như nước trong nguồn chảy ra',
        photoUrl: 'https://upload.wikimedia.org/wikipedia/vi/thumb/9/9b/Hanh_trinh_cua_Elaina_quyen_1.png/220px-Hanh_trinh_cua_Elaina_quyen_1.png',
        price: 80000, href: ''}
    ]
    const [keySearch, setKey] = useState('');
    const [show, setShow] = useState(false)
    const handleChange = (e) => {
        setKey(e.target.value)
    }
    return (  
        <Tippy
            interactive={true}
            visible={show && searchResult.length}
            onClickOutside={()=>setShow(false)}
            placement='bottom'
            render={attrs => (
                <div className="box" tabIndex="-1" {...attrs}>
                <SearchPopper searchResult={searchResult}/>
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