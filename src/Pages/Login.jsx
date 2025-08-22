import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';

const Login = () => {
    const { signIn } = use(AuthContext);
    const handleSignIn = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email,password);
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode,errorMessage)
            })
    }
    return (
        <div className='flex justify-center items-center pt-0 min-h-screen'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <div className="card-body">
                    <h2 className='font-bold text-xl text-center'>Please, Login your account!</h2>
                    <form onSubmit={handleSignIn} className="fieldset">
                        {/* Email */}
                        <label className="label">Email</label>
                        <input
                            type="email"
                            className="input"
                            placeholder="Email"
                            name='email'
                        />
                        {/* Password */}
                        <label className="label">Password</label>
                        <input
                            type="password"
                            className="input"
                            placeholder="Password"
                            name='password'
                        />
                        <div><a className="link link-hover">Forgot password?</a></div>
                        <button className="btn bg-[#F9A51A] btn-neutral border-0 text-black mt-4">Login</button>
                    </form>
                    <p className='font-semibold text-center'>Don't have any account?  <Link className='text-[#F9A51A] hover:underline' to='/auth/register'>Create an account</Link> </p>
                </div>
            </div>
        </div>
    );
};

export default Login;