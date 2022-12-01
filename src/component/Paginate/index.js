import { useState } from 'react';
import { Link } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import className from 'classnames/bind';
import style from './Paginate.module.scss';
var cx = className.bind(style);

function Pagenate({products, itemPerPage}) {
    const [itemOffset, setItemOffset] = useState(0);
    const endOffset = itemOffset + itemPerPage;
    const currentItems = products.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(products.length / itemPerPage);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemPerPage) % products.length;
        setItemOffset(newOffset);
    };
    return (  
        <>
            <div className={cx('product-list')}>  
                {currentItems && currentItems.map((product, index) => { return (
                    <div key={index} className={cx('product')}>
                        <Link className={cx('link', 'product-info')} to={product.href}>
                            <img src={product.url} alt=''/>
                            <span className={cx('product-name')}>{product.title}</span>
                            {product.sale ? <p>{product.sale + '%'}</p> : <></>}
                        </Link>
                        <div className={cx('price')}>
                            <p className={cx('product-current-price')}>{String((product.price * (100 - product.sale) / 100).toFixed(3))}</p>
                            {product.sale ? 
                            <p className={cx('product-price')}>{product.price}</p>:
                            <p className={cx('product-price-fake')}>0</p>}                   
                        </div>
                    </div>
                )})}
            </div>
                        
            <ReactPaginate
                breakLabel="..."
                nextLabel=">"
                onPageChange={handlePageClick}
                pageRangeDisplayed={2}
                marginPagesDisplayed={2}
                pageCount={pageCount}
                previousLabel="<"
                renderOnZeroPageCount={null}
                activeClassName={cx('selected')}
                previousClassName={cx('previous')}
                nextClassName={cx('next')}
                className={cx('paginate')}/>
        </>
    );
}

export default Pagenate;