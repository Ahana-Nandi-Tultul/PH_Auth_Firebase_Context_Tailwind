import React, { createContext } from 'react';

export const AuthContext = createContext(null);

const Authproviders = ({children}) => {
    const user = {displayName: 'Ahana Tuli'}
    return (
        <AuthContext.Provider value={user}>
            {children}
        </AuthContext.Provider>
    );
};

export default Authproviders;