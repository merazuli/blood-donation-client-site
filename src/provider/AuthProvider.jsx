import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from '../firebase/firebase.config';
import axios from 'axios';






const auth = getAuth(app);

// googleProvider 

const googleProvider = new GoogleAuthProvider();

// create context for all component declare 
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [role, setRole] = useState('')
    const [districts, setDistricts] = useState([]);
    const [upazila, setUpazila] = useState([])
    // console.log(upazila)
    if (loading) {
        <span className="loading loading-spinner loading-xl"></span>
    }

    // // user create 
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }




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

    // get role er jonno useEffect 
    useEffect(() => {
        if (!user) return;
        axios.get(`http://localhost:5000/users/role/${user.email}`)
            .then(res => {
                setRole(res.data.role)
            })
    }, [user])

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

    // districts data  

    useEffect(() => {
        fetch("/districts.json")   // public থেকে fetch
            .then(res => res.json())
            .then(data => {
                setDistricts(data)
            })
            .catch(err => console.error(err));
    }, []);
    // upazilas data  

    useEffect(() => {
        fetch("/upazila.json")   // public থেকে fetch
            .then(res => res.json())
            .then(data => {
                setUpazila(data)
            })
            .catch(err => console.error(err));
    }, []);







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
        role,
        districts,
        upazila,
    }


    return (<AuthContext value={authData}>{children}</AuthContext>);




};

export default AuthProvider;