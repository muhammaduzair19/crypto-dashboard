import React from 'react'

const Loading = () => {
    return (
        <main className="flex justify-center flex-col items-center h-screen bg-[#23273F]">
            <div className="w-16 h-16 border-8 border-t-[#707298] border-[#D1D3EB] rounded-full animate-spin"></div>
            <h1 className='text-4xl text-darker-400 font-bold'>Loading....</h1>
        </main>
    )
}

export default Loading