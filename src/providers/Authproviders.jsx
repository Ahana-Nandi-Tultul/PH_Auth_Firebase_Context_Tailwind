import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

export const AuthContext = createContext(null);

const auth = getAuth(app);
const googleAuthProvider = new GoogleAuthProvider();

const Authproviders = ({children}) => {

    const [user, setUser] = useState(null)
    const [loading, setLoadding] = useState(true);

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth , email, password);
    }

    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }


    const googleSignIn = () => {
        return signInWithPopup(auth, googleAuthProvider);
    }

    const logout = () => {
        return signOut(auth);
    }

    useEffect(() => {
        const unsubcribe = onAuthStateChanged(auth, currentUser => {
            console.log(currentUser);
            setUser(currentUser);
            setLoadding(false);
        })

        return () => {
            unsubcribe();
        }
    }, [])

    const authInfo = {
        user,
        createUser,
        login,
        logout,
        googleSignIn,
        loading
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Authproviders;