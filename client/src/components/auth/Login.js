import React, { Fragment, useState } from 'react'
import wrap from 'express-async-wrap';
import { Link } from 'react-router-dom';

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const { email, password } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = wrap(async e => {
        e.preventDefault();
        // success
    });

    return (
        <Fragment>
            <h1 className="large text-primary">Sign Up</h1>
            <p className="lead"><i className="fas fa-user"></i> Sign in Your Account</p>
            <form className="form" onSubmit={e => onSubmit(e)}>
                <div className="form-group">
                <input type="email" placeholder="Email Address" name="email" required value={email} onChange={e => onChange(e)}/>
                </div>

                <div className="form-group">
                    <input
                        type="password"
                        placeholder="Password"
                        name="password"
                        minLength="6"
                        required 
                        value={password} 
                        onChange={e => onChange(e)}
                    />
                </div>

                <input type="submit" className="btn btn-primary" value="Login" />
            </form>
            <p className="my-1">
                Dont have an account? <Link to="/register">Sign Up</Link>
            </p>
        </Fragment>
    )
}

export default Login
