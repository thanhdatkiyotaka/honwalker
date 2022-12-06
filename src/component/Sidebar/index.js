/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-loop-func */
import { useEffect, useState} from 'react';
import { NavLink } from 'react-router-dom';
import Category from '~/rawData/Category';
import className from 'classnames/bind';
import style from './Sidebar.module.scss';
var cx = className.bind(style);

function Sidebar() {
    const first_cate = [];
    let href = window.location.href;
    let path = href.split('/').slice(3); 
    for (var index in Category) {
        if (path[0].includes(Category[index].href.slice(1))) {
            localStorage.setItem('category', Category[index].title);
            first_cate.push(index);
            if (path.length >= 2) {
                for (var index1 in Category[index].children) {
                    var path1 = Category[index].children[index1].href.split('/')
                    if (path[1].includes(path1[path1.length -1])) {
                        first_cate.push(index1);
                        localStorage.setItem('category', Category[index].children[index1].title);
                        if (path.length >=  3) {
                            
                            for (var index2 in Category[index].children[index1].children) {
                                localStorage.setItem('category', Category[index].children[index1].children[index2].title)
                                var path2 = Category[index].children[index1].children[index2].href.split('/')
                                if (path[2].includes(path2[path2.length - 1])) {
                                    first_cate.push(index2);
                                    break;
                                }
                            }
                        }
                        break;
                    }
                }
            }
            break;
        }
    }
    const [category, setCategory] = useState(first_cate);
   
    useEffect(()=> {
        setCategory([]);
        for (var index in Category) {
            localStorage.setItem('category', Category[index].title);
            if (path[0].includes(Category[index].href.slice(1))) {
                setCategory((prop)=>{
                    return [...prop, index];
                });
                if (path.length >= 2) {
                    for (var index1 in Category[index].children) {
                        localStorage.setItem('category', Category[index].children[index1].title);
                        var path1 = Category[index].children[index1].href.split('/')
                        if (path[1].includes(path1[path1.length -1])) {
                            setCategory((prop)=>{
                                return [...prop, index1];
                            });
                            if (path.length >=  3) {
                                for (var index2 in Category[index].children[index1].children) {
                                    localStorage.setItem('category', Category[index].children[index1].children[index2].title)
                                    var path2 = Category[index].children[index1].children[index2].href.split('/')
                                    if (path[2].includes(path2[path2.length - 1])) {
                                        setCategory((prop)=>{
                                            return [...prop, index2];
                                        });
                                        break;
                                    }
                                }
                            }
                            break;
                        }
                    }
                }
                break;
            }
        }
        path = href.split('/').slice(3);

      
    }, [window.location.href]);
    return (  
        <div className={cx('sidebar')}>
            <h1>Category</h1>
            <NavLink to={Category[category[0]].href} className={cx('link', 'title-one')} 
            style={({isActive}) => {return {color: isActive ? 'orange' : 'grey'}}}
            >
                {Category[category[0]].title}
            </NavLink>
            {Category[category[0]].children.map((item, index) => {
                return (
                    (category.length === 1 || category[1] >= index) ? 
                    <NavLink key={index} to={item.href} className={cx('link', 'title-two')} 
                    style={({isActive}) => {return {color: isActive ? 'orange' : 'grey'}}}>
                        {item.title}
                    </NavLink>: <></>)
            })}
            {category.length > 1 ?
            (<>
                {Category[category[0]].children[category[1]].children.map((item, index) => {
                    return (
                        <NavLink key={index} to={item.href} className={cx('link', 'title-three')} 
                        style={({isActive}) => {return {color: isActive ? 'orange' : 'grey'}}}>
                            {item.title}
                        </NavLink>
                    )})}
                </>):
                <></>}
        </div> 
    );
}

export default Sidebar;