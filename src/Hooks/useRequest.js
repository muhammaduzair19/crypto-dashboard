export const BaseUrl = 'http://192.168.18.11:3000';


export const UseGetRequest = () => {

};


export const usePostRequest = () => {

};

export const useToken = () => {
    return JSON.parse(localStorage.getItem('token1fx'))
}