import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion} from 'framer-motion';
import { vietBook, foreignBook, officeTool, schoolTool } from '../MenuData';
import className from 'classnames/bind';
import style from './MenuMobilePopper.module.scss';
import { faArrowLeft, faBook, faChevronRight, faEarthAmerica, faPen, faSchool, faSortDown, faSortUp } from '@fortawesome/free-solid-svg-icons';
const cx = className.bind(style);

function MenuMobilePopper({onClickClose, sub, type, active1, active2, active3, active4, onClickBar1, onClickBar2, onClickBar3, onClickBar4, onClickTitle}) {
    const activeClass = [
        cx({active1}), cx({active2}), cx({active3}), cx({active4})
    ]

    return (  
        <motion.div className={cx('wrapper')}
        >
            <div className={cx('header')}>
                <button onClick={onClickClose}>
                    <FontAwesomeIcon icon={faArrowLeft}/>
                </button>
                <h1>Product Category</h1>
            </div>
            <div className={cx('inner')}>
                <aside className={cx('sidebar')}>
                    <button onClick={onClickBar1} className={activeClass[0]}>
                        <FontAwesomeIcon icon={faBook}/>
                        <span>Sách Tiếng Việt</span>
                    </button>
                    <button onClick={onClickBar2} className={activeClass[1]}>
                        <FontAwesomeIcon icon={faEarthAmerica}/>
                        <span>Foreign Books</span>
                    </button>
                    <button onClick={onClickBar3} className={activeClass[2]}>
                        <FontAwesomeIcon icon={faPen}/>
                        <span>Văn phòng phẩm</span>
                    </button>
                    <button onClick={onClickBar4} className={activeClass[3]}>
                        <FontAwesomeIcon icon={faSchool}/>
                        <span>Hành trang đến trường</span>
                    </button>
                </aside>
                <div className={cx('content')}>
                    <Link className={cx('link')}>
                        <button className={cx('head')} onClick={onClickClose}>
                            <span>Tất cả sản phẩm</span>
                            <FontAwesomeIcon icon={faChevronRight}/>
                        </button>
                    </Link>
                    {type === 1 ?
                    (
                        vietBook.map((item, index) => {
                            return (
                                <div key={index} className={cx('sub-category')}>
                                    {sub === index ?
                                    (<>
                                        <button className={cx('title-active')} onClick={(index)=>onClickTitle(index)}>
                                            <span>{item.title}</span>
                                            <FontAwesomeIcon icon={faSortUp}/>
                                        </button>
                                        {item.children.map((nextItem, dex) => {
                                            return (
                                                <Link key={dex} className={cx('link')}>
                                                    <button onClick={onClickClose} className={cx('ex-category')}>
                                                        <span>{nextItem.title}</span>
                                                        <FontAwesomeIcon icon={faChevronRight}/>
                                                    </button>
                                                </Link>
                                                )
                                        })}
                                        <Link className={cx('link')}><button onClick={onClickClose} className={cx('extend')}>Xem tất cả</button></Link>
                                    </>):
                                    (<button className={cx('title')} onClick={()=>onClickTitle(index)}>
                                        <span>{item.title}</span>
                                        <FontAwesomeIcon icon={faSortDown}/>
                                    </button>)}
                        
                                </div>
                            )
                        })
                    ):<></>}
                     {type === 2 ?
                    (
                        foreignBook.map((item, index) => {
                            return (
                                <div key={index} className={cx('sub-category')}>
                                    {sub === index ?
                                    (<>
                                        <button className={cx('title-active')} onClick={()=>onClickTitle(index)}>
                                            <span>{item.title}</span>
                                            <FontAwesomeIcon icon={faSortUp}/>
                                        </button>
                                        {item.children.map((nextItem, dex) => {
                                            return (
                                                <Link key={dex} className={cx('link')}>
                                                    <button onClick={onClickClose} className={cx('ex-category')}>
                                                        <span>{nextItem.title}</span>
                                                        <FontAwesomeIcon icon={faChevronRight}/>
                                                    </button>
                                                </Link>
                                                )
                                        })}
                                        <Link className={cx('link')}><button onClick={onClickClose} className={cx('extend')}>Xem tất cả</button></Link>
                                    </>):
                                    (<button className={cx('title')} onClick={()=>onClickTitle(index)}>
                                        <span>{item.title}</span>
                                        <FontAwesomeIcon icon={faSortDown}/>
                                    </button>)}
                        
                                </div>
                            )
                        })
                    ):<></>}
                     {type === 3 ?
                    (
                        officeTool.map((item, index) => {
                            return (
                                <div key={index} className={cx('sub-category')}>
                                    {sub === index ?
                                    (<>
                                        <button className={cx('title-active')} onClick={()=>onClickTitle(index)}>
                                            <span>{item.title}</span>
                                            <FontAwesomeIcon icon={faSortUp}/>
                                        </button>
                                        {item.children.map((nextItem, dex) => {
                                            return (
                                                <Link key={dex} className={cx('link')}>
                                                    <button onClick={onClickClose}  className={cx('ex-category')}>
                                                        <span>{nextItem.title}</span>
                                                        <FontAwesomeIcon icon={faChevronRight}/>
                                                    </button>
                                                </Link>
                                                )
                                        })}
                                        <Link className={cx('link')}><button onClick={onClickClose} className={cx('extend')}>Xem tất cả</button></Link>
                                    </>):
                                    (<button className={cx('title')} onClick={()=>onClickTitle(index)}>
                                        <span>{item.title}</span>
                                        <FontAwesomeIcon icon={faSortDown}/>
                                    </button>)}
                        
                                </div>
                            )
                        })
                    ):<></>}
                     {type === 4 ?
                    (
                        schoolTool.map((item, index) => {
                            return (
                                <div key={index} className={cx('sub-category')}>
                                    {sub === index ?
                                    (<>
                                        <button className={cx('title-active')} onClick={()=>onClickTitle(index)}>
                                            <span>{item.title}</span>
                                            <FontAwesomeIcon icon={faSortUp}/>
                                        </button>
                                        {item.children.map((nextItem, dex) => {
                                            return (
                                                <Link key={dex} className={cx('link')}>
                                                    <button onClick={onClickClose}  className={cx('ex-category')}>
                                                        <span>{nextItem.title}</span>
                                                        <FontAwesomeIcon icon={faChevronRight}/>
                                                    </button>
                                                </Link>
                                                )
                                        })}
                                        <Link className={cx('link')}><button onClick={onClickClose} className={cx('extend')}>Xem tất cả</button></Link>
                                    </>):
                                    (<button className={cx('title')} onClick={()=>onClickTitle(index)}>
                                        <span>{item.title}</span>
                                        <FontAwesomeIcon icon={faSortDown}/>
                                    </button>)}
                        
                                </div>
                            )
                        })
                    ):<></>}
                </div>
            </div>
        </motion.div>
    );
}

export default MenuMobilePopper;