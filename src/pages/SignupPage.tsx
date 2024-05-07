import React from 'react';
import { signUpEmail } from '../firebase/auth';

const SignupPage = () => {
    const handleSignUp = async (event: React.FormEvent) => {
        event.preventDefault();
        const email = (event.target as HTMLFormElement).email.value;
        const password = (event.target as HTMLFormElement).password.value;
        signUpEmail(email, password);
    };

    return (
        <form onSubmit={handleSignUp}>
            <label htmlFor="email">Email</label>
            <input id="email" type="email" name="email" required />
            <label htmlFor="password">Password</label>
            <input id="password" type="password" name="password" required minLength={6} />
            <button type="submit">Sign Up</button>
        </form>
    );
};

export default SignupPage;
