import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { httpGet, httpPost } from "../../functions/requests";
import { getAuthToken, setAuthToken } from "../../helpers/auth-helper";
import { useMutation, useLazyQuery , gql } from '@apollo/client';

export const UserContext = React.createContext();


export default function UserContextProvider({ children }) {

    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const LOGIN_MUTATION = gql`
        mutation login($identifier: String!, $password: String!){
            login(input: { identifier: $identifier, password: $password }) {
                jwt
                user {
                    id
                    username
                    email
                    confirmed
                    blocked
                    role {
                        id
                        name
                        description
                        type
                    }
                }
            }
        }
    `;

    const ME_QUERY = gql`
        query GetMe {
            me {
                id
                username
                email
                confirmed
                blocked
                role {
                    id
                    name
                    description
                    type
                }
            }
        }
    `;

    const [loginMutation] = useMutation(LOGIN_MUTATION, {
        onCompleted: (data) => {
            setAuthToken(data.login.jwt)
            setUser(prev => {
                setIsLoading(false);
                return data.user
            })
        },
        onError: (error) => {
            console.log(error);
        }
    });

    const [getMe] = useLazyQuery(ME_QUERY, {
        onCompleted: (data) => {
            setUser(prev => {
                setIsLoading(false)
                return data.me
            })
            
            console.log(data)
        },
        onError: (error) => {
            setUser(undefined);
            setIsLoading(false);
            console.log(error);
        }
    });

    const update = () => {

        setIsLoading(true);

        getMe();

        // TODO: If wrong auth token, disconnect
    }



    useEffect(() => {
        const auth_token = getAuthToken();

        if (auth_token === undefined) return;
        
        update()
    }, [setUser, setIsLoading])



    const login = (identifier, password) => {
        loginMutation({ variables: { identifier: identifier, password: password } });
    }


    const register = () => {



    }

    return (
        <UserContext.Provider value={{user, isLoading, update, login, register}}>
            {children}
        </UserContext.Provider>
    )
}
