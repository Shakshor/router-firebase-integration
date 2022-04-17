import { useEffect, useState } from "react";
import App from "../App";
import app from '../firebase.init';
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth';


const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const useFirebase = () => {
    const [user, setUser] = useState({});

    // event handler for sign in in login link
    const signInWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const user = result.user;
                setUser(user);
                console.log(user);
            })
            .catch(error => {
                console.error(error);
            })
    }


    // event handler for sign out 
    const handleSignOut = () => {
        signOut(auth)
            .then(() => { })
    }

    // state change loading using useEffect
    useEffect(() => {
        onAuthStateChanged(auth, user => {
            setUser(user);
        })
    }, [])



    // return [user, setUser];
    return { user, signInWithGoogle, handleSignOut }
}

export default useFirebase;