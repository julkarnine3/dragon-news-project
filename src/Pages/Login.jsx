import React, { use, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';

const Login = () => {
    const { signIn } = use(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const [error, setError] = useState();
    // console.log(location);
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
                navigate(`${location.state ? location.state : "/"}`);
            })
            .catch(error => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // alert(errorMessage);
                setError(errorCode);
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
                            required
                        />
                        {/* Password */}
                        <label className="label">Password</label>
                        <input
                            type="password"
                            className="input"
                            placeholder="Password"
                            name='password'
                            required
                        />
                        <div><a className="link link-hover">Forgot password?</a></div>
                        <button className="btn bg-[#F9A51A] btn-neutral border-0 text-black mt-4">Login</button>
                    </form>
                    {error && <p className='text-red-500 text-xs text-center'>Email or password invalid!</p>}
                    <p className='font-semibold text-center'>Don't have any account?  <Link className='text-[#F9A51A] hover:underline' to='/auth/register'>Create an account</Link> </p>
                </div>
            </div>
        </div>
    );
};

export default Login;