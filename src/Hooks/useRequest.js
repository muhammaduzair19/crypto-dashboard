// export const BaseUrl = "http://24.199.99.6:9002"
export const BaseUrl = "https://e0dc-2400-adc1-192-4a00-d0f7-dd3b-1992-aff9.ngrok-free.app"


export const useGetRequest = async (endpoints) => {
    const url = `${BaseUrl}/${endpoints}`;
    const token = useToken();
    const results = await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
    });
    const result = await results.json();
    const { code } = result;

    if (code === 401) {
        localStorage.removeItem('token1fx')
        return
    }

    return result;
};


export const usePostRequest = async (endpoints, body) => {
    const url = `${BaseUrl}/${endpoints}`;
    const token = useToken();
    const results = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(body)
    })
    const result = await results.json();
    const { code } = result;

    if (code === 401) {
        localStorage.removeItem('token1fx')
        return
    }

    return result;
};

export const useResetPasswordRequest = async (endpoints, token, body) => {
    const url = `${BaseUrl}/${endpoints}`;
    const results = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(body)
    })
    return await results.json();
};

export const useToken = () => {
    return JSON.parse(localStorage.getItem('token1fx'))
}