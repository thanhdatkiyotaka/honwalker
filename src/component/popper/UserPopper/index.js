import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '~/App';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import className from 'classnames/bind';
import style from './UserPopper.module.scss';
import { faNotesMedical, faRightFromBracket, faScrewdriver, faUser } from '@fortawesome/free-solid-svg-icons';
const cx = className.bind(style);

function UserPopper({onClick}) {
    const userStatus = useContext(UserContext);
    return (  
        <div className={cx('wrapper')}>
            <Link to='/profile' className={cx('link')}>
                <button className={cx('head')} onClick={onClick}>
                    <FontAwesomeIcon icon={faUser}/>
                    <span>Thông tin cá nhân</span>
                </button>    
            </Link>
            {userStatus.isAdmin && (
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
                <button className={cx('tail')} onClick={onClick}>
                    <FontAwesomeIcon icon={faRightFromBracket}/>
                    <span>Log out</span>
                </button>    
            </Link>
        </div>
    );
}

export default UserPopper;