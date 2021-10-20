import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useState, useEffect } from "react";

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const auth = getAuth();

    const signInWithGoogle = () => {
        const googleProvider = new GoogleAuthProvider();

        signInWithPopup(auth, googleProvider)
        .then(result => {
            setUser(result.user);
        })

    }

    const createUser = () => {
        createUserWithEmailAndPassword(auth, email, password)
        .then(result => {
            setUser(result.user);
        });
    }

    const loginUser = () => {
        signInWithEmailAndPassword(auth, email, password)
        .then(result => {
            setUser(result.user);
        });
    }


    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({});
            }
        });
        return () => unsubscribed;
    }, [])

    const logOut = () => {
        signOut(auth)
        .then(() => {  })
    }

    return {
        user,
        setEmail,
        setPassword,
        setUser,
        createUser,
        loginUser,
        signInWithGoogle,
        logOut
    }
}

export default useFirebase;