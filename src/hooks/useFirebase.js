import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import auth from '../firebase.init';

const googleProvider = new GoogleAuthProvider();

const useLoginWithFirebase = () => {
    const [user, setUser] = useState({});

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

    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                console.log('signed out');
            })
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            // if(user){
            //     setUser(user);
            // }
            // else{
            //     setUser({});
            // }
            setUser(user);
        });
    }, [])

    return { user, setUser, signInWithGoogle,handleSignOut}

};
export default useLoginWithFirebase;