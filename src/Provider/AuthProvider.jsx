import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from '../Firebase/firebase.config';


export const AuthContext = createContext();

const auth = getAuth(app);
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // SignUp user
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    };
    // SignIn user
    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    // Update User
    const updateUser = (updateData) =>{
        return updateProfile(auth.currentUser, updateData);
    } 
    // SignOut user
    const logOut = () => {
        signOut(auth)
            .then(() => {
                alert("You sign out Successfully!");
                // Sign-out successful.
            })
            .catch((error) => {
                // An error happened.
                alert(error.message);
            });
    }
    // Current user Observer
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => {
            unSubscribe()
        };
    }, [])

    const authData = {
        user,
        setUser,
        createUser,
        logOut,
        signIn,
        setLoading,
        loading,
        updateUser,
    }
    // console.log(user);
    return <AuthContext value={authData}>{children}</AuthContext>;
};

export default AuthProvider;