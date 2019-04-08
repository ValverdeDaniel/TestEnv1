import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/authActions';
import { clearCurrentProfile } from '../../actions/profileActions';
import './layout.scss';


class Navbar extends Component {
  onLogoutClick(e) {
    e.preventDefault();
    this.props.clearCurrentProfile();
    this.props.logoutUser();
  }

  render() {
    const { isAuthenticated, user } = this.props.auth;

    const authLinks = (
      <ul className="navigation-bar navigation-bottom">
        <li className="navigation-item">
          <Link className="navigation-link" to="/feed">
            Feedback Forum
          </Link>
        </li>
        <li className="navigation-item">
          <Link className="navigation-link"  to="/dashboard">
            Dashboard
          </Link>
        </li>
        <li className="navigation-item">
          <a href="" onClick={this.onLogoutClick.bind(this)} className="navigation-link">
            Logout
          </a>
        </li>
      </ul>
    );

    const guestLinks = (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link className="nav-link" to="/register">
            Sign Up
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/login">
            Login
          </Link>
        </li>
      </ul>
    );

    return ( 
      <nav className="navigation">
        <Link className="" to="/">
          <div className="navigation-logo"></div>
        </Link>  
        <ul className="navigation-bar">
          {/* i would like to add this creators page back but we need to make enhancements, i think it would be nice so users can find eachother, and businesses can see which users are already willing to make a deal. */}
          {/* <li className="navigation-item">
            <Link className="navigation-link" to="/profiles">
              {' '}
              Creators
            </Link>
          </li> */}
          <li className="navigation-item">
            <Link className="navigation-link" to="/contGen">
              {' '}
              Contract Generator
            </Link>
          </li>
          <li className="navigation-item">
            <Link className="navigation-link" to="/Contracts">
              {' '}
              Contracts
            </Link>
          </li>
        </ul>
        {isAuthenticated ? authLinks : guestLinks}
      </nav> 
    );
  }
}

Navbar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logoutUser, clearCurrentProfile })(
  Navbar
);
