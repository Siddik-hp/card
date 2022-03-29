import React from 'react'
import { useLocation } from 'react-router-dom'

const FullPage = () => {
    const location = useLocation()
    return (
        <div className='container px-10 pt-10'>
            <div>
                <div className=''>
                    <img className='w-100' style={{ height: "400px" }} src={location.state.image} alt="img" />
                    <div className='px-4 py-4 text-xl'>
                        <h1>{location.state.id}</h1>
                        <h1>{location.state.cetagory}</h1>
                        <h1>{location.state.title}</h1>
                        <button className=' bg-indigo-700 px-4 py-2 text-white mt-10'>Preview</button>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default FullPage