// export const BaseUrl = "http://192.168.18.11:5000"
export const BaseUrl = "https://eb2a-2400-adc1-192-4a00-995d-450b-35ff-1d40.ngrok-free.app"
// export const BaseUrl = "http://24.199.99.6:9002"


export const useGetRequest = async (endpoints) => {
    console.log(endpoints, 'endpoints');
    const url = `${BaseUrl}/${endpoints}`;
    const token = useToken();
    console.log(url, '=> url');
    console.log(token, 'token');
    const results = await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
    });
    console.log(results);
    return await results.json();
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
    return await results.json();
};

export const useToken = () => {
    return JSON.parse(localStorage.getItem('token1fx'))
}