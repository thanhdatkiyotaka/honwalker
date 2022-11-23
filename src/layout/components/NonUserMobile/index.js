import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import className from 'classnames/bind';
import style from '../Header/Header.module.scss';

var cx = className.bind(style)

function NonUserMobile() {
    return (
        <Link to='/login'>
            <button className={cx('user-btn-mobile')}>
                <FontAwesomeIcon icon={faUser}/>
            </button>
        </Link>
        
    );
}

export default NonUserMobile;