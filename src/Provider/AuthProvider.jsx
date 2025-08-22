import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../Firebase/firebase.config';


export const AuthContext = createContext();

const auth = getAuth(app);
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    // SignUp user
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    };
    // SignIn user
    const signIn = (email,password) => {
        return signInWithEmailAndPassword(auth,email,password);
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
    }
    console.log(user);
    return <AuthContext value={authData}>{children}</AuthContext>;
};

export default AuthProvider;