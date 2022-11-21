import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import className from 'classnames/bind';
import style from './NavPopper.module.scss';
import { faBuildingColumns, faHouse, faTruck } from '@fortawesome/free-solid-svg-icons';
const cx = className.bind(style);

function NavPopper({onClick}) {
    return (  
        <div className={cx('wrapper')}>
            <Link to='/admin-home' className={cx('link')}>
                <button onClick={onClick}>
                    <FontAwesomeIcon icon={faHouse}/>
                    <span>Trang chủ</span>
                </button>
            </Link>
            <Link to='/admin-listorder' className={cx('link')}>
                <button onClick={onClick}>
                    <FontAwesomeIcon icon={faTruck}/>
                    <span>Đơn hàng</span>
                </button>
            </Link>
            <Link to='/admin-finance' className={cx('link')}>
                <button onClick={onClick}>
                    <FontAwesomeIcon icon={faBuildingColumns}/>
                    <span>Báo cáo tài chính</span>
                </button>
            </Link>
        </div>
    );
}

export default NavPopper;