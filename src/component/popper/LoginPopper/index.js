import { Link } from 'react-router-dom';

import className from 'classnames/bind';
import style from './LoginPopper.module.scss';
const cx = className.bind(style);

function LoginPopper() {
    return (  
        <div className={cx('wrapper')}>
            <Link to='/login' className={cx('link')}>
                <button className={cx('login')}>Login</button>
            </Link>
            
            <Link to='/login' className={cx('link')}>
                <button className={cx('signin')}>Sign in</button>
            </Link>

        </div>
    );
}

export default LoginPopper;