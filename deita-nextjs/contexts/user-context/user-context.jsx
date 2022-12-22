import React, { useCallback } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { getAuthToken, setAuthToken } from "../../helpers/auth-helper";
import { useMutation, useLazyQuery , gql } from '@apollo/client';

export const UserContext = React.createContext();


export default function UserContextProvider({ children }) {

    const [user, setUser] = useState();
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
                console.log(data);
                return data.login.user
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
            
            console.log('--start--')
            console.log(data)
            console.log('--end--')
        },
        onError: (error) => {
            setIsLoading(false);
            console.log('--err--')
            console.log(error);
            console.log('--err_end--')
        }
    });

    const update = useCallback(() => {

        const auth_token = getAuthToken();
        if (auth_token === undefined) return;
        
        setIsLoading(true);

        getMe();

        // TODO: If wrong auth token, disconnect
    }, [getMe])



    useEffect(update, [update])



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
