import React from 'react'
import Error from '../components/Error'

const Notfound = () => {
    return (
        <div>
            <Error code={404} link={'Back to Home'} text={'Page not found'} />
        </div>
    )
}

export default Notfound