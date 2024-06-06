import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const [token, setToken] = useState()
    const navigate = useNavigate()
    useEffect(() => {
        const storedToken = localStorage.getItem('token1fx')
        if (storedToken) {
            setToken(storedToken)
            navigate('/')
        }
   
    }, [])



    return children;
}

export default PrivateRoute