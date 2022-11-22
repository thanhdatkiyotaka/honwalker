
import Tippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { LoginPopper} from '~/component/popper';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import className from 'classnames/bind';
import style from '../Header/Header.module.scss';

var cx = className.bind(style)

function NonUserPopup() {
    return (  
        <Tippy
            interactive={true}
            render={attrs => (
                <div className="box" tabIndex="-1" {...attrs}>
                    <LoginPopper/>
                </div>
            )}>
            <button className={cx('user-btn')}>
                <FontAwesomeIcon icon={faUser}/>
            </button>
        </Tippy>
    );
}

export default NonUserPopup;