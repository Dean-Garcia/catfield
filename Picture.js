import React from 'react'
import { useDrag } from "react-dnd";

const Picture = ({ id, url }) => {

    const [{ isDragging }, drag] = useDrag(() => ({
        type: 'picture',
        item: { id: id },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),

    }));

    return (
        <img
            ref={drag}
            src={url}
            style={{
                width: "150px",
                border: isDragging ? "1px solid pink" : "0px"
            }}
        />
    );
}

export default Picture
