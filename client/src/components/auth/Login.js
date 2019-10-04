import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    const [formData, setFormDate] = useState({
        email: '',
        password: ''
    });

    const { email, password } = formData;

    const onChange = e => setFormDate({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async e => {
        e.preventDefault();
        console.log('SUCCESS');
    };

    return (
        <Fragment>
            <h1 class="large text-primary">
                Sign In
            </h1>
            <p class="lead"><i class="fas fa-user"></i> Sign into your account</p>
            <form onSubmit={onSubmit} class="form">
                <div class="form-group">
                <input 
                    type="email" 
                    placeholder="Email Address"
                    value={email}
                    onChange={onChange}
                    name='email' />
                </div>
                <div class="form-group">
                <input 
                    type="password" 
                    placeholder="Password" 
                    value={password}
                    onChange={onChange}
                    name='password'
                    minlength="6" />
                </div>
                <input type="submit" value="Login" class="btn btn-primary" />
            </form>
            <p class="my-1">
                Don't have an account? <Link to="/register">Sign Up</Link>
            </p>
        </Fragment>
    );
}

export default Login;
