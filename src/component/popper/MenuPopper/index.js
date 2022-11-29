import {useState} from 'react';
import { Link } from 'react-router-dom';
import Category from '~/rawData/Category';
import className from 'classnames/bind';
import style from './MenuPopper.module.scss';
const cx = className.bind(style);


function MenuPopper() {
    const [type, setType] = useState(1);
    return (  
        <div className={cx('wrapper')}>
            <aside className={cx('category')}>
                <h1>Product Category</h1>
                {Category.map((item, index) => {return (
                    <Link to={item.href} key={index} className={cx('link')}><button onMouseOver={()=>setType(index + 1)}>{item.title}</button></Link>
                )})}    
            </aside>
            <span/>
            <div className={cx('content')}>
                <div className={cx('inner')}>
                    {type === 1 ? 
                    (<>
                        {Category[0].children.map((item, index) => {
                            return (
                                <div key={index} className={cx('sub-category')}>
                                    <h3>{item.title}</h3>
                                    {item.children.map((nextItem, dex) => {
                                        return (
                                            <Link to={nextItem.href} key={dex} className={cx('link')}>{nextItem.title}</Link>
                                        )
                                    })}
                                    <Link to={item.href} className={cx('link', 'extend')}>Xem tất cả</Link>
                                </div>
                            )
                        })}
                    </>):<></>}
                    {type === 2 ? 
                    (<>
                        {Category[1].children.map((item, index) => {
                            return (
                                <div key={index} className={cx('sub-category')}>
                                    <h3>{item.title}</h3>
                                    {item.children.map((nextItem, dex) => {
                                        return (
                                            <Link to={nextItem.href} key={dex} className={cx('link')}>{nextItem.title}</Link>
                                        )
                                    })}
                                    <Link to={item.href} className={cx('link', 'extend')}>Xem tất cả</Link>
                                </div>
                            )
                        })}
                    </>):<></>}
                    {type === 3 ? 
                    (<>
                        {Category[2].children.map((item, index) => {
                            return (
                                <div key={index} className={cx('sub-category')}>
                                    <h3>{item.title}</h3>
                                    {item.children.map((nextItem, dex) => {
                                        return (
                                            <Link to={nextItem.href} key={dex} className={cx('link')}>{nextItem.title}</Link>
                                        )
                                    })}
                                    <Link to={item.href} className={cx('link', 'extend')}>Xem tất cả</Link>
                                </div>
                            )
                        })}
                    </>):<></>}
                    {type === 4 ? 
                    (<>
                        {Category[3].children.map((item, index) => {
                            return (
                                <div key={index} className={cx('sub-category')}>
                                    <h3>{item.title}</h3>
                                    {item.children.map((nextItem, dex) => {
                                        return (
                                            <Link to={nextItem.href} key={dex} className={cx('link')}>{nextItem.title}</Link>
                                        )
                                    })}
                                    <Link to={item.href} className={cx('link', 'extend')}>Xem tất cả</Link>
                                </div>
                            )
                        })}
                    </>):<></>}
                </div>
            </div>
        </div>
    );
}

export default MenuPopper;