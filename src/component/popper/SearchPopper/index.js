/* eslint-disable no-unused-vars */
import {Link} from 'react-router-dom';
import {useState, useEffect} from 'react';
import className from 'classnames/bind';
import style from './SearchPopper.module.scss';
const cx = className.bind(style);

function SearchPopper({searchResult, searchKey}) {
    

    return (  
        <div className={cx('wrapper')}>
            {searchResult.length < 1 ?
            <p>Không tìm thấy kết quả</p>:
            <>
                <p>Kết quả tìm kiếm</p>
                <div className={cx('search-result')}>
                    {searchResult.map((item, index) => {
                        return (
                            <Link key={index} to={item.href} className={cx('link')}>
                                <button>
                                    <img src={item.photoUrl} alt=''/>
                                    <span>{item.name}</span>
                                </button>
                            </Link>
                        )
                    })}
                </div>
                <Link to={'/search/' + searchKey} className={cx('extend', 'link')}><p>Xem tất cả</p></Link>
            </>}
        </div>
    );
}

export default SearchPopper;