import className from 'classnames/bind';
import style from './Profile.module.scss';
var cx = className.bind(style)

function Profile() {
    return (  
        <div className={cx('wrapper')}>Profile</div>
    );
}

export default Profile;