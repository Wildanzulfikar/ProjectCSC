import React from 'react'
import ContentPrestasi from './ContentPrestasi';

function Prestasi ({img, title, role}) {
    return (
        <div className='px-[7%] mt-20'>
            <ContentPrestasi img={img} title={title} role={role}/>
        </div>
    )
}

export default Prestasi;