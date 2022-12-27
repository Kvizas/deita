import React, { useCallback } from "react";
import { useEffect } from "react";
import { useState } from "react";
//import { getAuthToken, setAuthToken, removeToken } from "../../helpers/auth-helper";
import pb from "../../helpers/pocketbase"; 

export const UserContext = React.createContext();


export default function UserContextProvider({ children }) {

    const [user, setUser] = useState();
    const [isLoading, setIsLoading] = useState(false);


    const update = useCallback(() => {
        if (!pb.authStore.isValid) return;
        setIsLoading(true);

        pb.collection('users').authRefresh({}, {expand: "role"}).then(data => {
            setUser(prev => {
                setIsLoading(false)
                for(const key in data.record.expand) {
                    data.record[key] = data.record.expand[key];
                }
                delete data.record.expand;
                return data.record
            });
        }).catch(e => {
            console.log(e)
        });
        // TODO: If wrong auth token, disconnect
    });

    useEffect(update, []);

    const userUpdate = useCallback(() => {
        if (user == undefined) {
            pb.collection('users').unsubscribe();
            return;
        }

        pb.collection('users').subscribe(user.id, function (e) {
            pb.collection('users').getOne(e.record.id, {
                expand: 'role',
            }).then(data => {
                setUser(prev => {
                    setIsLoading(false)
                    for(const key in data.expand) {
                        data[key] = data.expand[key];
                    }
                    delete data.expand;
                    return data
                });
            }).catch(e => {
                console.log(e);
            });
        });
    });

    useEffect(userUpdate, [user]);

    const login = (identifier, password) => {
        pb.collection('users').authWithPassword(identifier, password, undefined, {expand: "role"}).then(data => {
            setUser(prev => {
                setIsLoading(false);
                for(const key in data.record.expand) {
                    data.record[key] = data.record.expand[key];
                }
                delete data.record.expand;
                return data.record
            })
        }).catch(e => {
            console.log(e);
        });
    }

    const logout = () => {
        setIsLoading(false);
        setUser(undefined);
        pb.authStore.clear();
    }


    const register = () => {



    }

    return (
        <UserContext.Provider value={{user, isLoading, update, login, register, logout}}>
            {children}
        </UserContext.Provider>
    )
}
