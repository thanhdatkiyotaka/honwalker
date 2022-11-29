/* Trang home của website */
import Sale from './Sale'
import TopMenu from './TopMenu';
import BestSeller from './BestSeller';
import NewBook from './NewBook';
import EconomyBook from './Economy';
import LightNovel from './LightNovel';
import LanguageBook from './LanguageBook';
import Manga from './Manga';
import OfficeTool from './OfficeTool';
import className from 'classnames/bind';
import style from './Home.module.scss';
import '~/assets/css/grid.css';
var cx = className.bind(style)

function Home() {
    return (  
        <div className={cx('wrapper')}>
            <div className='grid wide'>
                <TopMenu />
                <Sale/>
                <BestSeller/>
                <NewBook/>
                <EconomyBook/>
                <LightNovel/>
                <LanguageBook/>
                <Manga/>
                <OfficeTool/>
            </div>
        </div>
    );
}

export default Home;