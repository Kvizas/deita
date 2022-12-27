import { getAuthToken } from "../helpers/auth-helper";

async function httpRequestBase(url, headers, args = {}) {
    const token = getAuthToken();

    return await (await fetch(url, {
        headers: { Authorization: `Bearer ${token}`, ...headers },
        ...args
    })).json();
}

export async function httpGet(url, headers = {}) {
    return httpRequestBase(url, headers)
}

export async function httpPost(url, data, headers = {}) {
    return httpRequestBase(url, headers, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            ...headers
        },
        body: JSON.stringify(data)
    });
}