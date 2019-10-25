import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrentProfile } from '../../actions/profile';
import Spinner from '../layout/Spinner';

const Dashboard = ({ profile: { profile, loading }, auth: { user }, getCurrentProfile }) => {
    useEffect(() => {
        getCurrentProfile();
    }, []);

    return loading && profile === null ? <Spinner /> : <Fragment>
        <h1 className="large text-primary">Dashboard</h1>
        <p className="lead">
            <i className="fas fa-user" /> Welcome { user && user.name }
        </p>
        { profile !== null ? 
        (
            <Fragment>has</Fragment>
         ) :
         ( 
         <Fragment>
             <p>You have not yet setup a profile, please add some info</p>
             <Link to="/create-profile" className="btn btn-primary my-1">Create Profile</Link>
         </Fragment>
         )
        }
    </Fragment>;
}

Dashboard.propTypes = {
    profile: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired,
    getCurrentProfile: PropTypes.func.isRequired
}

const mapStateToProps = state => {
    return {
        profile: state.profile,
        auth: state.auth
    }
}

export default connect(mapStateToProps, { getCurrentProfile })(Dashboard);