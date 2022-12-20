import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { httpGet, httpPost } from "../../functions/requests";
import { getAuthToken, setAuthToken } from "../../helpers/auth-helper";

export const UserContext = React.createContext();


export default function UserContextProvider({ children }) {

    const [user, setUser] = useState();
    const [isLoading, setIsLoading] = useState(true);


    const update = () => {

        setIsLoading(true)

        // TODO: If wrong auth token, disconnect

        httpGet(process.env.STRAPI_API_URL + '/api/users/me').then(data => {

            if (data.error) {
                setUser(undefined);
                setIsLoading(false);
                return;
            }

            setUser(prev => {
                setIsLoading(false)
                return data
            })
            
            console.log(data)
        })

    }



    useEffect(() => {

        const auth_token = getAuthToken();

        if (auth_token === undefined) return;
        
        update()

    }, [setUser, setIsLoading])



    const login = (identifier, password) => {

        httpPost(process.env.STRAPI_API_URL + '/api/auth/local', {
            identifier,
            password
        }).then(data => {
            
            setAuthToken(data.jwt)
            setUser(prev => {
                setIsLoading(false);
                return data.user
            })
    
        })
    }


    const register = () => {



    }

    return (
        <UserContext.Provider value={{user, isLoading, update, login, register}}>
            {children}
        </UserContext.Provider>
    )
}
