import React from 'react'

const AUTH_TOKEN = "authToken";

export function getAuthToken() {
    return localStorage.getItem(AUTH_TOKEN)
}

export function setAuthToken(token) {
    localStorage.setItem(AUTH_TOKEN, token);
}

export function removeToken() {
    localStorage.removeItem(AUTH_TOKEN);
}