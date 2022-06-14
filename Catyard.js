import React from 'react'
import Box from './Box'

const Catyard = ({ pictures }) => {
    return (
        <div className="catyard">
            {pictures.map((picture) => {
                return <Box url={picture.url} id={picture.id} />
            })}
        </div>
    )
}

export default Catyard
