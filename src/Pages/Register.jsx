import React, { use, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';

const Register = () => {
    const { createUser, setUser, updateUser } = use(AuthContext);
    const [errorName, setErrorName] = useState("");
    const navigate = useNavigate()
    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        if(name.length < 5){
            setErrorName("Please give your name more than 5 characters!");
            return
        }
        else{
            setErrorName("");
        }
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        // console.log({name, photo, email, password});

        // SignUp user
        createUser(email, password)
            .then(result => {
                const user = result.user;
                //Update user
                updateUser({displayName: name,photoURL: photo})
                .then(()=>{
                    setUser({...user, displayName: name,photoURL: photo});
                    navigate('/');
                })
                .catch((error)=>{
                    console.log(error);
                    setUser(user);
                });
            })
            .catch(error => {
                const errorMessage = error.message;
                console.log(errorMessage);
            })
    }
    return (
        <div className='flex justify-center items-center pt-0 min-h-screen'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <form onSubmit={handleRegister} className="card-body">
                    <h2 className='font-bold text-xl text-center'>Please, Create an account!</h2>
                    <fieldset className="fieldset">
                        {/* name */}
                        <label className="label">Name</label>
                        <input
                            type="text"
                            className="input"
                            name='name'
                            placeholder="Name"
                            required
                        />
                        {errorName && <p className='text-error text-red-500'>{errorName}</p>}
                        {/* Photo url*/}
                        <label className="label">Photo URL</label>
                        <input
                            type="text"
                            className="input"
                            name='photo'
                            placeholder="Photo URL"
                            required
                        />
                        {/* email */}
                        <label className="label">Email</label>
                        <input
                            type="email"
                            className="input"
                            name='email'
                            placeholder="Email"
                            required
                        />
                        {/* Password */}
                        <label className="label">Password</label>
                        <input
                            type="password"
                            className="input"
                            name='password'
                            placeholder="Password"
                            required
                        />

                        <button type='submit' className="btn bg-[#F9A51A] btn-neutral border-0 text-black mt-4">Register</button>
                    </fieldset>
                    <p className='font-semibold text-center'>Already have an account?  <Link className='text-[#F9A51A] hover:underline' to='/auth/login'>Login</Link> </p>
                </form>
            </div>
        </div>
    );
};

export default Register;