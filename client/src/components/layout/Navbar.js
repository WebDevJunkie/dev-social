import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';

const Navbar = ({ auth: {isAuthenticated, loading}, logout }) => {
    const guestLinks = (
        <ul>
            <li><Link to="/">Developers</Link></li>
            <li><Link to="/register">Register</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/profiles">Profiles</Link></li>
        </ul>
    );

    const authLinks = (
        <ul>
            <li>
                <a href="#!" onClick={logout}>Logout</a>
            </li>
            <li>
                <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
                <Link to="/profiles">Profiles</Link>
            </li>
        </ul>
    );

    return (
        <nav className="navbar bg-dark">
            <h1>
                <Link to="/"> <i className="fas fa-code"></i> DevConnector </Link>
            </h1>
            { isAuthenticated ? authLinks : guestLinks }
        </nav>
    );
}

Navbar.propTypes = {
    logout: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
}

const mapStateToProps = state => {
    return {
        auth: state.auth,
    }
}

export default connect(mapStateToProps, { logout })(Navbar);
