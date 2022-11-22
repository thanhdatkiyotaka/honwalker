/* eslint-disable no-unused-vars */
import {Link} from 'react-router-dom';
import className from 'classnames/bind';
import style from './CartPopper.module.scss';
const cx = className.bind(style);

function CartPopper() {
    const products = [
        {name: 'Date a live',
        photoUrl: 'https://upload.wikimedia.org/wikipedia/vi/thumb/9/9b/Hanh_trinh_cua_Elaina_quyen_1.png/220px-Hanh_trinh_cua_Elaina_quyen_1.png',
        price: 80000},
        {name: 'Date a live',
        photoUrl: 'https://upload.wikimedia.org/wikipedia/vi/thumb/9/9b/Hanh_trinh_cua_Elaina_quyen_1.png/220px-Hanh_trinh_cua_Elaina_quyen_1.png',
        price: 80000},
        {name: 'Date a live, công cha như núi thái sơn, nghĩa mẹ như nước trong nguồn chảy ra',
        photoUrl: 'https://upload.wikimedia.org/wikipedia/vi/thumb/9/9b/Hanh_trinh_cua_Elaina_quyen_1.png/220px-Hanh_trinh_cua_Elaina_quyen_1.png',
        price: 80000}
    ]
    return (  
        <div className={cx('wrapper')}>
            <span className={cx('title')}>Giỏ hàng</span>
            {(!products.length)?
            (<p>Không có sản phẩm</p>):
            (<div className={cx('cart')}>
                <div className={cx('list-product')}>
                    {products.map((product, index) => {
                        return (
                            <Link to='/product' className={cx('link')} key={index}>
                                <div className={cx('product')}>
                                    <div className={cx('product-face')}>
                                        <img alt='' src={product.photoUrl}/>
                                        <span className={cx('name')}>{product.name}</span>
                                    </div>
                                    <span className={cx('price')}>{product.price}</span>
                                </div>
                            </Link>
                        )
                    })}
                </div>
                <Link to='/cart' className={cx('link')}>
                    <button className={cx('cart-btn')}>Đi đến giỏ hàng</button>
                </Link>
            </div>)}
        </div>
    );
}

export default CartPopper;