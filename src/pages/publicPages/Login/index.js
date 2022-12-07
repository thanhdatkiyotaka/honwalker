import {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import className from 'classnames/bind';
import style from './Login.module.scss';
import { faLock, faUser } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
var cx = className.bind(style)

function Login() {
    let navigate = useNavigate();
    const [loginActive, setLogin] = useState(true);
    const [signActive, setSign] = useState(false);
    const loginClass = cx({loginActive})
    const signClass = cx({signActive})

    const [values, setValues] = useState({
        email: '',
        password: '',
        confirmPassword: ''
    })

    const handleChange = (e) => {
        setValues({...values, [e.target.name]: e.target.value});
    }


    const handleSignup =  (e) => {
        console.log('king')
        e.preventDefault();
        if (values.email && values.password && values.password === values.confirmPassword) {
            const sentData = {
                email: values.email,
                password: values.password
            }
            axios.post('http://localhost:8000/signup.php', sentData)
                .then((result) => {
                    if (result.data === 'fail') alert('Email đã tồn tại');
                    else {
                        alert("Đăng ký thành công");
                        setLogin(true);
                        setSign(false);
                    }
                })
                .catch((error)=>{
                    console.log(error);
                })
        }
    }
    
    const handleLogin =  (e) => {
        console.log('king')
        e.preventDefault();
        if (values.email && values.password ) {
            const sentData = {
                email: values.email,
                password: values.password
            }
            axios.post('http://localhost:8000/login.php', sentData)
                .then((result) => {
                    if (result.data) {
                        localStorage.setItem('userId', result.data.id);
                        localStorage.setItem('isAdmin', result.data.isAdmin);
                        localStorage.setItem('userName', result.data.name);
                        localStorage.setItem('userPhoto', result.data.photoUrl);
                        navigate('/');
                    }
                    else alert('Thông tin đăng nhập không chính xác');
                })
                .catch((error)=>{
                    console.log(error);
                })
        }
    }
    

    
    return (  
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('title')}>
                    <button onClick={()=>{setLogin(true); setSign(false); setValues({email:'',password:'',confirmPassword:''})}} className={loginClass}>Login</button>
                    <button onClick={()=>{setLogin(false); setSign(true); setValues({email:'',password:'',confirmPassword:''})}} className={signClass}>Sign up</button>
                </div>
                {loginActive ?
                <form action=''>
                    <label>Username</label>
                    <div className={cx('input')}>
                        <button>
                            <FontAwesomeIcon icon={faUser}/>
                        </button>
                        <input placeholder='Type your username'  value={values.email} type='text' name='email' 
                        onChange={(e)=>handleChange(e)}/>
                    </div>
                    <label>Password</label>
                    <div>
                        <button>
                                <FontAwesomeIcon icon={faLock}/>
                        </button>
                        <input placeholder='Type your password' value={values.password} type='password' name='password'
                        onChange={(e)=>handleChange(e)}/>
                    </div>
                    <button className={cx('sign-btn')} type='submit' onClick={(e)=>handleLogin(e)} >LOGIN</button>:
                </form>:

                <form action=''>
                    <label>Username</label>
                    <div className={cx('input')}>
                        <button>
                            <FontAwesomeIcon icon={faUser}/>
                        </button>
                        <input placeholder='Type your username'  value={values.email} type='text' name='email' 
                        onChange={(e)=>handleChange(e)}/>
                    </div>
                    <label>Password</label>
                    <div>
                        <button>
                                <FontAwesomeIcon icon={faLock}/>
                        </button>
                        <input placeholder='Type your password' value={values.password} type='password' name='password'
                        onChange={(e)=>handleChange(e)}/>
                    </div>
                    <label>Confirm Password</label>
                    <div>
                        <button>
                            <FontAwesomeIcon icon={faLock}/>
                        </button>
                        <input placeholder='Type your password' value={values.confirmPassword} type='password' name='confirmPassword'
                        onChange={(e)=>handleChange(e)}/>
                    </div>
                    <button className={cx('sign-btn')} type='submit' onClick={(e)=>handleSignup(e)}>SIGN UP</button>
                
                </form> }    
            </div>
        </div>
    );
}

export default Login;