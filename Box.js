import React from 'react'
import { useDrag, useDrop } from 'react-dnd';

const Box = ({ name, url, id, created }) => {

    const [{ isDragging }, drag] = useDrag(() => ({
        type: 'picture',
        item: { id: id },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),

    }));

    const [{ isOver }, drop] = useDrop(() => ({
        accept: 'picture',
        drop: (item) => addImageToBoard(item.id),
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        })
    }));


    const addImageToBoard = (id) => {
        console.log('added');
    }

    return (
        <div ref={drop}>
            {url != undefined ? <img ref={drag} src={url} style={{ width: "150px" }} /> : <div className='box'>{name}</div>}
        </div>
    )
}

export default Box
