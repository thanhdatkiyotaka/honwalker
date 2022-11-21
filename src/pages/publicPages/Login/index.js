import {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import className from 'classnames/bind';
import style from './Login.module.scss';
import { faLock, faUser } from '@fortawesome/free-solid-svg-icons';
var cx = className.bind(style)

function Login() {
    const [loginActive, setLogin] = useState(true);
    const [signActive, setSign] = useState(false);

    let navigate = useNavigate();
    const loginClass = cx({loginActive})
    const signClass = cx({signActive})
    const handleLogin = () => {
        navigate('/');
    }

    const handleSignup = () => {
        navigate('/');
    }
    return (  
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('title')}>
                    <button onClick={()=>{setLogin(true); setSign(false)}} className={loginClass}>Login</button>
                    <button onClick={()=>{setLogin(false); setSign(true)}} className={signClass}>Sign in</button>
                </div>
                {loginActive?
                (<div>
                   <form>
                        <label>Username</label>
                        <div className={cx('input')}>
                            <button>
                                <FontAwesomeIcon icon={faUser}/>
                            </button>
                            <input placeholder='Type your username' className={cx('nam-input')}/>
                        </div>
                        <label>Password</label>
                        <div>
                            <button>
                                <FontAwesomeIcon icon={faLock}/>
                            </button>
                            <input placeholder='Type your password' className={cx('pass-input')}/>
                        </div>
                        <button className={cx('sign-btn')} onClick={handleLogin}>LOGIN</button>
                    </form>
                </div>):
                (<div>
                    <form>
                        <label>Username</label>
                        <div>
                            <button>
                                <FontAwesomeIcon icon={faUser}/>
                            </button>
                            <input placeholder='Type your username' className={cx('name-input')}/>
                        </div>
                        <label>Password</label>
                        <div>
                            <button>
                                <FontAwesomeIcon icon={faLock}/>
                            </button>
                            <input placeholder='Type your password' className={cx('pass-input')}/>
                        </div>
                        <label>Password</label>
                        <div>
                            <button>
                                <FontAwesomeIcon icon={faLock}/>
                            </button>
                            <input placeholder='Type your password' className={cx('pass-input1')}/>
                        </div>
                        <button className={cx('sign-btn')} onClick={handleSignup}>SIGN UP</button>
                    </form>
                </div>)}
            </div>
        </div>
    );
}

export default Login;