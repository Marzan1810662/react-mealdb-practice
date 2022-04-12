import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import {  useEffect, useState } from "react";
import auth from '../firebase.init';

const googleProvider = new GoogleAuthProvider();

const useFirebase = (email, password) => {
    const [user, setUser] = useState({});

    const signUpWithEmailPassword = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                setUser(user);
            })
            .catch(error => {
                console.log(error);
            })
    }

    const signInWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const user = result.user;
                setUser(user);
                console.log(user);
            })
            .catch(error => {
                console.log(error);
            })
    }

    const LogInwithEmailAndPassword = () => {
        signInWithEmailAndPassword(auth, email, password)
        .then(result => {
            const user = result.user;
            setUser(user);
            console.log(user);
        })
        .catch(error => {
            console.log(error);
        })
        console.log('signInWithGoogle');
    }

    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                console.log('signed out');
            })
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            setUser(user);
        });
    }, [])

    return { user, setUser, signUpWithEmailPassword,LogInwithEmailAndPassword, signInWithGoogle, handleSignOut }

};
export default useFirebase;