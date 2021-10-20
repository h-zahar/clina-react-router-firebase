import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useState, useEffect } from "react";

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();

    const signInWithGoogle = () => {
        setIsLoading(true);
        const googleProvider = new GoogleAuthProvider();

        return signInWithPopup(auth, googleProvider)

    }

    const createUser = () => {
        setIsLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const updateUserName = () => {
        updateProfile(auth.currentUser, {displayName: name})
        .then(() => { });
    }

    const loginUser = () => {
        setIsLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }


    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({});
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [])

    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
        .then(() => {  })
        .finally(() => setIsLoading(false));
    }

    return {
        user,
        isLoading,
        setName,
        setEmail,
        setPassword,
        setUser,
        updateUserName,
        createUser,
        loginUser,
        signInWithGoogle,
        setIsLoading,
        logOut
    }
}

export default useFirebase;