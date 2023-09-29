import React from 'react';
import { BiEdit } from 'react-icons/bi'
import { IconContext } from 'react-icons/lib';
import { RiDeleteBin5Line } from 'react-icons/ri'

const ListTodo = ({ text, updateMode, deleteTodo }) => {
    return (
        <div className='todo'>
            <div className='text'>{text}</div>
            <div className='icons'>
                <IconContext.Provider value={{ color: 'blue' }}>
                    <BiEdit className='icon' onClick={updateMode} />
                </IconContext.Provider>
                <IconContext.Provider value={{ color: 'red' }}>
                    <RiDeleteBin5Line className='icon' onClick={deleteTodo} />
                </IconContext.Provider>
            </div>
        </div>
    )
}

export default ListTodo
