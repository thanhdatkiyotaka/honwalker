import className from 'classnames/bind';
import style from './Home.module.scss';
var cx = className.bind(style)

function Home() {
    return (  
        <div className={cx('wrapper')}>Home</div>
    );
}

export default Home;