import React, { Fragment, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../../actions/auth';
import PropTypes from 'prop-types';

const Login = ({ login, isAuthenticated }) => {
    const [formData, setFormDate] = useState({
        email: '',
        password: ''
    });

    const { email, password } = formData;

    const onChange = e => setFormDate({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async e => {
        e.preventDefault();
        login(email, password);
    };

    if (isAuthenticated) {
        return <Redirect to="/dashboard" />
    }

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

Login.propTypes = {
    login: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool.isRequired
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.isAuthenticated
    }
}

export default connect(mapStateToProps, { login })(Login);
