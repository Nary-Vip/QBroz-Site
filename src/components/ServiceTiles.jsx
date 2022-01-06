import React from 'react'


const ServiceTiles = (props) => {
    const { Icon, title } = props.service;

    

    return (
        <div className='flex items-center p-2 space-x-6'>
            <Icon className='w-12 h-12 text-green-500' />
            <div>
                <h6 className='font-bold'>{title}</h6>
                <p>Some blaw blaw</p>
            </div>
        </div>
    )
}

export default ServiceTiles
