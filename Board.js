import React, { useState, useReducer } from 'react'
import Box from './Box.js';
import { useDrop } from 'react-dnd';

// const initialState = { height: 5, width: 5, board: [...Array(25).keys()], boardArray: [] };

// const ACTIONS = {
//     SET_ARRAY: 'setArray'
// }

// const reducer = (state, { type, payload }) => {
//     switch (type) {
//         case ACTIONS.SET_ARRAY:
//             return { ...state, boardArray: payload };
//         default:
//             break;
//     }
// }

const Board = ({ board }) => {

    // const [state, dispatch] = useReducer(reducer, initialState);
    let newBoard = board.map((item) => <Box name={item} />)
    // dispatch({ type: ACTIONS.SET_ARRAY, payload: newBoard })

    return (
        <div className="board">
            {newBoard}
        </div>
    )
}

export default Board
