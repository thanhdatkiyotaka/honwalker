import className from 'classnames/bind';
import style from './UserPopper.module.scss';
const cx = className.bind(style);

function UserPopper() {
    return (  
        <div className={cx('wrapper')}></div>
    );
}

export default UserPopper;