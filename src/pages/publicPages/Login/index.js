import {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import className from 'classnames/bind';
import style from './Login.module.scss';
import { faLock, faUser } from '@fortawesome/free-solid-svg-icons';
var cx = className.bind(style)

function Login({isLogin}) {
    const [haveAccount, setAccount] = useState(true);
    let navigate = useNavigate();
    const handleLogin = () => {
        navigate('/');
    }

    const handleSignup = () => {
        navigate('/');
    }
    return (  
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <h1>Login</h1>
                {haveAccount?
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
                    <div className={cx('sign-up')}>
                        <span>Don't have account?</span>
                        <button onClick={() => setAccount(false)}>Sign up</button>
                    </div>
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