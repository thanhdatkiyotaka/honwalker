import { Link } from 'react-router-dom';
import className from 'classnames/bind';
import style from './NavPopper.module.scss';
const cx = className.bind(style);

function NavPopper() {
    return (  
        <div className={cx('wrapper')}>
            <Link to='/admin-home' className={cx('link')}>Trang chủ</Link>
            <Link to='/admin-listorder' className={cx('link')}>Đơn hàng</Link>
            <Link to='/admin-finance' className={cx('link')}>Báo cáo tài chính</Link>
        </div>
    );
}

export default NavPopper;