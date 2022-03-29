import React, { useEffect, useState } from 'react'
import { CardApi } from '../Api/CardApi'
import Card from '../Components/Card'
// import List from '../Components/List'

const Home = () => {
    const [data, setData] = useState(CardApi)
    const filterItem = (curelem) => {
        const updatedData = CardApi.filter((elem) => {
            return elem.cetagory === curelem
        })
        setData(updatedData)
    }

    return (
        <>
            <div className='mb-10'>
                <div className='text-white flex justify-center items-center  gap-10 mt-10'>
                    <button onClick={() => { setData(CardApi) }} className='bg-indigo-700 py-2 px-4 rounded-md shadow-md shadow-gray-400 focus:bg-indigo-800'>All</button>
                    <button onClick={() => filterItem("frontend")} className='bg-indigo-700 py-2 px-4 rounded-md shadow-md shadow-gray-400 focus:bg-indigo-800'>Front-end</button>
                    <button onClick={() => filterItem("backend")} className='bg-indigo-700 py-2 px-4 rounded-md shadow-md shadow-gray-400 focus:bg-indigo-800'>Back-end</button>
                    <button onClick={() => filterItem("fullstack")} className='bg-indigo-700 py-2 px-4 rounded-md shadow-md shadow-gray-400 focus:bg-indigo-800'>FullStack</button>
                    <button onClick={() => filterItem("landing")} className='bg-indigo-700 py-2 px-4 rounded-md shadow-md shadow-gray-400 focus:bg-indigo-800'>Landing</button>
                    <button onClick={() => filterItem("portfolio")} className='bg-indigo-700 py-2 px-4 rounded-md shadow-md shadow-gray-400 focus:bg-indigo-800'>Portfolio</button>
                </div>
                <div className='px-10 mt-10 grid grid-cols-3 gap-4'>
                    {
                        data.map(({ id, image, title, cetagory, animation }) => {
                            return (
                                <Card key={id} id={id} image={image} title={title} cetagory={cetagory} animation={animation} />
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Home