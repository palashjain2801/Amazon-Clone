import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'
function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const signIn = e =>{
            e.preventDefault();
    }
    const register = e => {
        e.preventDefault();
    }
    return (
        <div className='login'>
            <Link to='/'>
            <img className='login__logo' src="http://pngimg.com/uploads/amazon/amazon_PNG24.png" alt=""/>
            </Link>
            <div className="login__container">
                <h1>Sign-in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type='text' value ={email} onChange={e=> setEmail(e.target.value)}/>
                    <h5>Password</h5>
                    <input type='password' value={password} onChange ={ e=>setPassword(e.target.value)}/>

                    <button className='login__signinButton' type='submit' onClick={signIn}>Sign In</button>

                </form>
                <p>By siging-in you agree to the AMAZON FAKE CLONE condition of use & Sale.
                    Please see out Privacy Notice, our cookies Notice and our Interest-Based Ads Notice
                </p>
                <button className='Login_registerButton' onClick={register}>Create your amazon account</button>
            </div>
        </div>
    )
}

export default Login
