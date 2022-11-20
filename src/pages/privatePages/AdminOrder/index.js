/* Trang hiển thị một đơn hàng cụ thể theo góc nhìn của admin */


import className from 'classnames/bind';
import style from './AdminOrder.module.scss'
var cx = className.bind(style)

function AdminOrder() {
    return (  
        <div className={cx('AdminOrder')}>AdminOrder</div>
    );
}

export default AdminOrder;