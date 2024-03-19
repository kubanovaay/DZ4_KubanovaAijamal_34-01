import React, { useState } from 'react';
import classes from './Todo.module.css';
import Button from '../button/Button';
import Input from '../input/Input';

const Todo = ({ todo, handleDelete, handleDone, handleEdit, handleCurrentEdit, isEdit }) => {
    const [input, setInput] = useState(todo.title);

    const handleSave = () => {
        handleEdit({
            ...todo,
            title: input
        });
        handleCurrentEdit('');
    };

    const handleCancel = () => {
        setInput(todo.title);
        handleCurrentEdit('');
    };

    return (
        <>
            {isEdit && (
                <div>
                    <Input
                        type="text"
                        value={input}
                        onChange={(event) => setInput(event.target.value)}
                    />
                    <Button title="Save" action={handleSave} />
                    <Button title="Cancel" action={handleCancel} />
                </div>
            )}

            <li className={`${classes.todo} ${todo.completed ? classes.completed : ''}`}>
                <p>id: {todo.id}</p>
                <p className={todo.completed ? classes.completedText : ''}>title: {todo.title}</p>
                <Button title="Edit" action={() => handleCurrentEdit(todo.id)} />
                <Button title="Done" action={() => handleDone(todo.id)} />
                <Button title="Delete" action={() => handleDelete(todo.id)} />
            </li>
        </>
    );
};

export default Todo;
