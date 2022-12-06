/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable no-loop-func */
/* Trang hiển thị danh sách các sản phẩm tìm kiếm */
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';

import Pagenate from '~/component/Paginate';
import Select from 'react-select';
import Sidebar from '~/component/Sidebar';
import '~/assets/css/grid.css';
import className from 'classnames/bind';
import style from './ListProduct.module.scss';
import axios from 'axios';
var cx = className.bind(style)


function ListProduct() {
    
    const [listProduct, setListProduct] = useState([]);
   
   
    const options1 = [
        { value: 'money', label: 'Giá tiền' },
        { value: 'sale', label: 'Khuyến mãi' },
        { value: 'sold', label: 'Số lượng bán' }
    ];
    const options2 = [
        { value: 'increase', label: 'Tăng dần' },
        { value: 'decrease', label: 'Giảm dần' }
    ];
    const [sort1, setSort1] = useState(options1[2]);
    const [sort2, setSort2] = useState(options2[1]);

    useEffect(()=> {
        axios.post('http://localhost/getTypeProduct.php', {key: localStorage.getItem('category')})
        .then((result)=> {
            setListProduct(result.data);
            console.log(result.data);
        })
        
    },[localStorage.getItem('category')])
    
    
    return (  
        <div className='grid wide'>
            <div className={cx('wrapper')}>
                <Sidebar/> 
                <div className={cx('content')}>
                    <div className={cx('filter')}>
                        <span>Sort by</span>
                        <Select defaultValue={sort1} onChange={setSort1} options={options1} className={cx('select')}/>
                        <Select defaultValue={sort2} onChange={setSort2} options={options2} className={cx('select')}/>
                    </div>
                    {listProduct.length === 1 ?
                    <p>Kết quả tìm kiếm không có</p>:
                    <p>
                        <div className={cx('list-laptop')}><Pagenate products={listProduct} itemPerPage={24}/></div>
                        <div className={cx('list-tablet')}><Pagenate products={listProduct} itemPerPage={16}/></div>
                        <div className={cx('list-mobile')}><Pagenate products={listProduct} itemPerPage={12}/></div>
                    </p>
                    }
                </div>
            </div>
        </div>
    );
}

export {default as Sale} from './Sale';
export {default as BestSeller} from './BestSeller';
export {default as NewBook} from './NewBook';

export default ListProduct;