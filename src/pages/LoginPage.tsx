import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { signInGoogle, signInEmail } from '../firebase/auth';

const LoginPage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const fromUrl = location.state?.from?.pathname || '/';

    const handleLogin = async (event: React.FormEvent) => {
        event.preventDefault();
        const email = (event.target as HTMLFormElement).email.value;
        const password = (event.target as HTMLFormElement).password.value;
        const userCredential = await signInEmail(email, password);
        if (userCredential.user.emailVerified) {
            console.log('User logged in successfully', userCredential.user, 'naviagete to ', fromUrl);
            navigate(fromUrl, { replace: true });  
          } else {
            alert('Please verify your email before logging in.');
          }
    };

    const handleSignInGoogle = async (event: React.FormEvent) => {
        event.preventDefault();
        const userCredential = await signInGoogle();
        if (userCredential.user.emailVerified) {
            console.log('User logged in successfully', userCredential.user, 'naviagete to ', fromUrl);
            navigate(fromUrl, { replace: true });  
          } else {
            alert('Please verify your email before logging in.');
          }
    };

    return (
        <div className="content-box">
            <div className="body-content">
                <div className="login-layout v2">
                    <h1>Sign in</h1>
                    <div id="email-error" className="error hidden">
                        <p>Please enter a valid email address</p>
                    </div>
                    <section id="alternate-login-v2">
                        <button onClick={handleSignInGoogle} className="g_id_signin" data-type="standard" data-width="400">
                            Sign in with Google
                        </button>
                        <h2>or</h2>
                    </section>
                    <form id="login-form" onSubmit={handleLogin}>
                        <label htmlFor="email" className="email-label">Email</label>
                        <input id="email" type="text" name="email" />
                        <br></br>
                        <label htmlFor="password" className="password-label">Password</label>
                        <input id="password" type="password" name="password" />
                        <button type="submit" className="login-button">Sign in</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
