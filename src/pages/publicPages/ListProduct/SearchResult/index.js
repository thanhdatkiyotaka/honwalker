/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import Pagenate from '~/component/Paginate';
import axios from 'axios';
import Select from 'react-select';
import '~/assets/css/grid.css';
import className from 'classnames/bind';
import style from '../ListProduct.module.scss';
var cx = className.bind(style);

function SearchResult() {
    const [result, setResult] = useState([]);

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


    const [key, setKey] = useState(window.location.href.split('/')[window.location.href.split('/').length - 1])
    
    useEffect(()=> {
        setKey(window.location.href.split('/')[window.location.href.split('/').length - 1])
        if (key.length < 2) {
            setResult([]);
            return;
        }
        axios.post('http://localhost:8000/searchResult.php', {key: key})
                .then((result) => {
                    if (result.data === 'no result') setResult([]);
                    else {
                        setResult(result.data);
                    }
                })
                .catch((error)=>{
                    console.log(error);
                })
    },[window.location.href])


    return (  
        <div className='grid wide'>
            <div className={cx('content')} style={{ marginTop: '7px'}}>
                <div className={cx('filter')}>
                    <span>Sort by</span>
                    <Select defaultValue={sort1} onChange={setSort1} options={options1} className={cx('select')}/>
                    <Select defaultValue={sort2} onChange={setSort2} options={options2} className={cx('select')}/>
                </div>
                {result.length === 1 ?
                <p>Kết quả tìm kiếm không có</p>:
                <p>
                    <div className={cx('list-laptop')}><Pagenate products={result} itemPerPage={24}/></div>
                    <div className={cx('list-tablet')}><Pagenate products={result} itemPerPage={16}/></div>
                    <div className={cx('list-mobile')}><Pagenate products={result} itemPerPage={12}/></div>
                </p>
                }
            </div>
        </div>
    );
}

export default SearchResult;