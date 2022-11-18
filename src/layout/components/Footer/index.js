import {Link} from 'react-router-dom'
import className from 'classnames/bind';
import style from './Footer.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMap, faPhone } from '@fortawesome/free-solid-svg-icons';
var cx = className.bind(style)

function Footer() {
    return (  
        <footer className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('conpany-info')}>
                    <img src={require('~/assets/images/logo.png')} alt=''/>
                    <p>Công ty cổ phần sách trực tuyến Honwalker</p>
                </div>
                <div className={cx('policy')}>
                    <h1>Dịch vụ</h1>
                    <Link className={cx('link')}>Điều khoản sử dụng</Link>
                    <Link className={cx('link')}>Chính sách bảo mật thông tin cá nhân</Link>
                    <Link className={cx('link')}>Chính sách bảo mật thanh toán</Link>
                    <Link className={cx('link')}>Giới thiệu Honwalker</Link>
                </div>
                <div className={cx('support')}>
                    <h1>Hỗ trợ</h1>
                    <Link className={cx('link')}>Chính sách đổi - trả- hoàn tiền</Link>
                    <Link className={cx('link')}>Chính sách bảo hành - bồi hoàn</Link>
                    <Link className={cx('link')}>Chính sách vận chuyển</Link>
                    <Link className={cx('link')}>Phương thức thanh toán và xuất hóa đơn</Link>
                </div>
                <div className={cx('contact')}>
                    <h1>Liên hệ</h1>
                    <Link className={cx('link')}>
                        <FontAwesomeIcon icon={faMap}/>
                        Lý Thường Kiệt, phường 14, quận 10, thành phố Hồ Chí Minh
                    </Link>
                    <div>
                        <FontAwesomeIcon icon={faEnvelope}/> honwalker@gmail.com
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faPhone}/> 09xxxxxxxx
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;