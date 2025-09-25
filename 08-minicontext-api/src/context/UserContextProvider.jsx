import React from 'react';
import UserContext from './UserContext';


const UserContextProvider = ({children}) => {
    const [user, setUser] = React.useState(null)
        return(
            <UserContext.Provider value={{user, setUser}}>
            {children}
            </UserContext.Provider>
        )
        

}

export default UserContextProvider;

// This component provides the UserContext to its children, allowing them to access and modify the user state.