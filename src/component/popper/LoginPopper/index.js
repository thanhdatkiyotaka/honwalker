import { Link } from 'react-router-dom';

import className from 'classnames/bind';
import style from './LoginPopper.module.scss';
const cx = className.bind(style);

function LoginPopper() {
    return (  
        <div className={cx('wrapper')}>
            <button>
                <Link to='/login'>Login</Link>
            </button>
            <button>
                <Link to='/login'>Sign in</Link>
            </button>
        </div>
    );
}

export default LoginPopper;