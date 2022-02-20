import React,{useState, useEffect, createContext} from 'react';
import firebaseConfig from './Firebase';


export const AuthContext = createContext()

export const AuthProvider =({children}) => {
    const [currentUser,setCurrentUser] = useState(null)

useEffect(() => {
    // We update the user every time there is an authenticatopn change, and we pass
    // the updated value to the currentUser, via setCurrentUser
    firebaseConfig.auth().onAuthStateChanged(setCurrentUser);
},[]);

return(
    // Then we pass the current user that we get from firebase to the components
    <AuthContext.Provider value={{currentUser}}>
       {children}
    </AuthContext.Provider>
)

}

export default AuthContext;