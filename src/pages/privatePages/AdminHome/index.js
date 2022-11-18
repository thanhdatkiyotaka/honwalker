import className from 'classnames/bind';
import style from './AdminHome.module.scss'
var cx = className.bind(style)

function AdminHome() {
    return (  
        <div className={cx('wrapper')}>AdminHome</div>
    );
}

export default AdminHome;