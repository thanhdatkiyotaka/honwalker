import {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import className from 'classnames/bind';
import style from './Login.module.scss';
import { faLock, faUser } from '@fortawesome/free-solid-svg-icons';
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


    const handleLogin = () => {
        navigate('/');
    }
    const handleSignup = async (e) => {
        navigate("/");
    }
    

    
    return (  
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('title')}>
                    <button onClick={()=>{setLogin(true); setSign(false); setValues({email:'',password:'',confirmPassword:''})}} className={loginClass}>Login</button>
                    <button onClick={()=>{setLogin(false); setSign(true); setValues({email:'',password:'',confirmPassword:''})}} className={signClass}>Sign in</button>
                </div>
                <form>
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
                    {loginActive ?
                    <button className={cx('sign-btn')} type='submit' onClick={handleLogin}>LOGIN</button>:
                    (<>
                        <label>Confirm Password</label>
                        <div>
                            <button>
                                <FontAwesomeIcon icon={faLock}/>
                            </button>
                            <input placeholder='Type your password' value={values.confirmPassword} type='password' name='confirmPassword'
                            onChange={(e)=>handleChange(e)}/>
                        </div>
                        <button className={cx('sign-btn')} type='submit' onClick={(e)=>handleSignup(e)}>SIGN UP</button>
                    </>)}
                </form>      
            </div>
        </div>
    );
}

export default Login;