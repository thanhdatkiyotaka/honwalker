import className from 'classnames/bind';
import style from './ListProduct.module.scss';
var cx = className.bind(style)

function ListProduct() {
    return (  
        <div className={cx('wrapper')}>ListProduct</div>
    );
}

export default ListProduct;