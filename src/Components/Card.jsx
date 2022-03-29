import React from 'react'
import { useNavigate } from 'react-router-dom'

const Card = ({ image, title, cetagory, animation, id }) => {
    const navigate = useNavigate()
    const GetIndivudualItem = () => {
        navigate(`/fullpage/${id}`, { state: { id: id, image: image, title: title, cetagory: cetagory } })
    }

    return (
        <div className='cursor-pointer' data-aos-duration="500" data-aos={animation} data-aos-offset="10">
            <a onClick={() => { GetIndivudualItem() }}>
                <div className='bg-cyan-500 rounded-lg transition-all'>
                    <img className='rounded-md' src={image} alt="img" />
                    <div className='px-4 py-4 text-white text-xl'>
                        <h1>{title}</h1>
                        <h1>{cetagory}</h1>
                    </div>
                </div>
            </a>
        </div>
    )
}

export default Card