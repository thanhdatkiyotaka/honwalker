import '~/assets/css/grid.css'
import className from 'classnames/bind';
import style from './Product.module.scss';
const cx = className.bind(style);


function Product() {
    return (  
        <div className='grid wide'>
            <div className='row'>
                <div className='col xl-2 l-3 m-4 s-6 xs-12'><div className={cx('block')}>イレイナ 1</div></div>
                <div className='col xl-2 l-3 m-4 s-6 xs-12'><div className={cx('block')}>イレイナ 2</div></div>
                <div className='col xl-2 l-3 m-4 s-6 xs-12'><div className={cx('block')}>イレイナ 3</div></div>
                <div className='col xl-2 l-3 m-4 s-6 xs-12'><div className={cx('block')}>イレイナ 4</div></div>
                <div className='col xl-2 l-3 m-4 s-6 xs-12'><div className={cx('block')}>イレイナ 5</div></div>
                <div className='col xl-2 l-3 m-4 s-6 xs-12'><div className={cx('block')}>イレイナ 6</div></div>
                <div className='col xl-2 l-3 m-4 s-6 xs-12'><div className={cx('block')}>イレイナ 7</div></div>
                <div className='col xl-2 l-3 m-4 s-6 xs-12'><div className={cx('block')}>イレイナ 8</div></div>
            </div>
        </div>
    );
}

export default Product;