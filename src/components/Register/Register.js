import React from 'react';

const Register = () => {
    return (
        <div>
            <h2>Please Register Now..</h2>
            <form>
                <input type="text" placeholder='Enter your Name' />
                <br></br>
                <input type="email" placeholder='Enter email' />
                <br />
                <input type="password" placeholder='password' />
                <br />
                <input type="submit" value="register" />
            </form>
        </div>
    );
};

export default Register;