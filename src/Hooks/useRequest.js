export const BaseUrl = 'http://24.199.99.6:9002';


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