import React from 'react';
import useFirebase from '../../hooks/useFirebase';

const Login = () => {
    // import or call the custom hook and get the value
    const { signInWithGoogle } = useFirebase();

    return (
        <div>
            <h2>Please Login.</h2>
            <div style={{ margin: '20px' }}>
                <button onClick={signInWithGoogle}>Google Sign In</button>
            </div>
            <form>
                <input type="email" placeholder='Enter email' />
                <br />
                <input type="password" placeholder='password' />
                <br />
                <input type="submit" value="Login" />
            </form>
        </div>
    );
};

export default Login;