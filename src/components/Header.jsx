import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/Authproviders';

const Header = () => {
    const {user, logout} = useContext(AuthContext);
    const handleLogout = () => {
        logout()
        .then(() => {
        })
        .catch(error => console.log(error))
    }
    return (
        <div>
            <div className="navbar bg-primary text-primary-content">
                <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
                <Link className="btn btn-ghost normal-case text-xl" to="/">Home</Link>
                <Link className="btn btn-ghost normal-case text-xl" to="/order">Order</Link>
                {
                    user && <Link className="btn btn-ghost normal-case text-xl" to="/profile">Profile</Link>

                }
                <Link className="btn btn-ghost normal-case text-xl" to="/login">Login</Link>
                <Link className="btn btn-ghost normal-case text-xl" to="/register">Register</Link>
                {
                    user ? <>
                    <span>{user.email}</span>
                    <button onClick={handleLogout} className="btn btn-xs">Signout</button>
                    </> :
                    <button className="btn btn-xs">Signout</button>
                }
            </div>
        </div>
    );
};

export default Header;