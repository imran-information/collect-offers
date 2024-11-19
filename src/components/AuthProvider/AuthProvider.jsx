import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../../firebase/firebase.init';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';

export const AuthContext = createContext()
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const googleProvider = new GoogleAuthProvider()



    const handleSignUpUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const handleSignInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const handleGoogleSignInUser = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    const handleSignOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currenUser) => {
            if (currenUser) {
                setUser(currenUser)
            } else {
                setUser(null)
            }

            setLoading(false)

            return () => {
                unSubscribe()
            }
        })
    }, [])

    const authInfo = {
        handleSignUpUser,
        handleSignInUser,
        handleGoogleSignInUser,
        handleSignOut,
        user,
        loading
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;