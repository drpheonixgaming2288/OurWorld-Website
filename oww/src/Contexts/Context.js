import React, {useContext, useEffect, useState, createContext} from 'react'
import firebase from '../firebase-config'
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged } from 'firebase/auth'

export const UserContext = createContext();

const UserContextProvider = (props) => {
    // const [isLoggedIn, setIsLoggedIn] = useState(false);
    // const [pfpUrl, setPfpUrl] = useState(null);
    const auth = getAuth(firebase);
    const currentUser = auth.currentUser;

    return(
        <UserContext.Provider value={{/*isLoggedIn, setIsLoggedIn, pfpUrl, setPfpUrl,*/ currentUser}}>
            {props.children}
        </UserContext.Provider>
    )
}
  

export default UserContextProvider;
