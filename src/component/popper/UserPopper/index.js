/* eslint-disable no-unused-vars */
import { Link } from 'react-router-dom';
import {useState, useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import className from 'classnames/bind';
import style from './UserPopper.module.scss';
import { faNotesMedical, faRightFromBracket, faScrewdriver, faUser } from '@fortawesome/free-solid-svg-icons';
const cx = className.bind(style);

function UserPopper({onClick}) {
    const [userId, setUserStatus] = useState(localStorage.getItem('userId'));
    const [isAdmin, setAdmin] = useState(localStorage.getItem('isAdmin'))
    const handleLogout = () => {
        localStorage.setItem('userId', '');
        localStorage.setItem('isAdmin', '');
        localStorage.setItem('userName', '');
        localStorage.setItem('userPhoto', '');
    }
    
    console.log(isAdmin, userId);
    return (  
        <div className={cx('wrapper')}>
            <Link to='/profile' className={cx('link')}>
                <button className={cx('head')} onClick={onClick}>
                    <FontAwesomeIcon icon={faUser}/>
                    <span>Thông tin cá nhân</span>
                </button>    
            </Link>
            {isAdmin === 'true' && (
                <Link to='/admin-home' className={cx('link')}>
                <button onClick={onClick}>
                    <FontAwesomeIcon icon={faScrewdriver}/>
                    <span>Đến trang Admin</span>
                </button>    
            </Link>  
            )}
            <Link to='/history-order' className={cx('link')}>
                <button onClick={onClick}>
                    <FontAwesomeIcon icon={faNotesMedical}/>
                    <span>Lịch sử đặt hàng</span>
                </button>    
            </Link>
            <Link to='/login' className={cx('link')}>
                <button className={cx('tail')} onClick={handleLogout}>
                    <FontAwesomeIcon icon={faRightFromBracket}/>
                    <span>Log out</span>
                </button>    
            </Link>
        </div>
    );
}

export default UserPopper;