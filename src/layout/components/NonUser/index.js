import Tippy from '@tippyjs/react/headless';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { LoginPopper} from '~/component/popper';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import className from 'classnames/bind';
import style from '../Header/Header.module.scss';

var cx = className.bind(style)

function NonUser() {
    const length = window.innerWidth
    return (  
        length > 760 ?
        <Tippy
            interactive={true}
            trigger='mouseenter'
            placement='bottom'
            render={attrs => (
                <div className="box" tabIndex="-1" {...attrs}>
                    <LoginPopper />
                </div>
            )}>
            <Link to='/login'>
                <button className={cx('user-btn')}>
                    <FontAwesomeIcon icon={faUser}/>
                </button>
            </Link>
        </Tippy>:
        <Link to='/login'>
            <button className={cx('user-btn')}>
                <FontAwesomeIcon icon={faUser}/>
            </button>
        </Link>
        
    );
}

export default NonUser;