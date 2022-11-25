import {useState} from 'react';
import { Link } from 'react-router-dom';
import { vietBook, foreignBook, officeTool, schoolTool } from '../MenuData';
import className from 'classnames/bind';
import style from './MenuPopper.module.scss';
const cx = className.bind(style);


function MenuPopper() {
    const [type, setType] = useState(1);
    return (  
        <div className={cx('wrapper')}>
            <aside className={cx('category')}>
                <h1>Product Category</h1>
                <Link className={cx('link')}><button onMouseOver={()=>setType(1)}>Sách Tiếng Việt</button></Link>
                <Link className={cx('link')}><button onMouseOver={()=>setType(2)}>Foreign Books</button></Link>
                <Link className={cx('link')}><button onMouseOver={()=>setType(3)}>Văn phòng phẩm</button></Link>
                <Link className={cx('link')}><button onMouseOver={()=>setType(4)}>Hành trang đến trường</button></Link>
            </aside>
            <span/>
            <div className={cx('content')}>
                <div className={cx('inner')}>
                    {type === 1 ? 
                    (<>
                        {vietBook.map((item, index) => {
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
                        {foreignBook.map((item, index) => {
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
                        {officeTool.map((item, index) => {
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
                        {schoolTool.map((item, index) => {
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