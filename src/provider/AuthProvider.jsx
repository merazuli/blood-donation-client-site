import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from '../firebase/firebase.config';






const auth = getAuth(app);

// googleProvider 

const googleProvider = new GoogleAuthProvider();

// create context for all component declare 
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    if (loading) {
        <span className="loading loading-spinner loading-xl"></span>
    }

    // // user create 
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }


    //    see current user 

    // see current user 
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false)
        })
        return () => {
            unsubscribe()
        }
    }, [])


    // update profile 

    const updateUserProfile = (updatedData) => {
        return updateProfile(auth.currentUser, updatedData)
    }
    // login user 

    const handleLogin = (email, password) => {

        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // log out user 

    const logOutUser = () => {
        signOut(auth);
    }

    // sign in google 

    const googleSignIn = () => {
        return signInWithPopup(auth, googleProvider)
    }

    // forget password 

    const forget = (email) => {

        return sendPasswordResetEmail(auth, email)
    }








    // pass data 
    const authData = {
        user,
        createUser,
        setUser,
        logOutUser,
        handleLogin,
        googleSignIn,
        updateUserProfile,
        forget,
    }


    return (<AuthContext value={authData}>{children}</AuthContext>);




};

export default AuthProvider;