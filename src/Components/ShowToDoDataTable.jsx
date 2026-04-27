import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import SplitButton from 'react-bootstrap/SplitButton';
import Dropdown from 'react-bootstrap/Dropdown';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';


function ShowToDoDataTable({ lsToDo, setLsToDo }) {
    const navigate = useNavigate();

    const doneToDo = (index) => {
        let doneToDo = lsToDo[index];
        const doneList = JSON.parse(localStorage.getItem("doneToDo")) || [];
        const doneTime = new Date().toLocaleString();

        doneList.push({ todo: doneToDo.todo, todocreatedTime: doneToDo.datetime, todoDoneTime: doneTime });
        const updatedToDo = lsToDo.filter((td, i) => i != index);

        setLsToDo(updatedToDo);

        localStorage.setItem("todo", JSON.stringify(updatedToDo));
        localStorage.setItem("doneToDo", JSON.stringify(doneList));
    }

    const deleteSingleToDo = (index) => {
        const updatedToDoList = lsToDo.filter((todo, e) => e != index);
        setLsToDo(updatedToDoList);
        localStorage.setItem("todo", JSON.stringify(updatedToDoList));
    }

    return (
        <>
            <Table striped bordered hover responsive>
                <thead>
                    <tr>
                        <td>#</td>
                        <td>ToDo</td>
                        <td>DateTime</td>
                        <td>Status</td>
                        <td>Edit</td>
                        <td>Delete</td>
                    </tr>
                </thead>
                <tbody>
                    {lsToDo.map((item, index) => (
                        <tr key={index + 1}>
                            <td>{index + 1}</td>
                            <td>{item.todo}</td>
                            <td>{item.datetime}</td>
                            <td>
                                <button className="btn btn-primary" onClick={() => doneToDo(index)}>Done</button>
                            </td>
                            <td>
                                <button className="btn btn-warning" onClick={() => navigate(`/add-todo/${index}`)}>Edit</button>
                            </td>
                            <td>
                                <button className="btn btn-danger" onClick={() => deleteSingleToDo(index)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </>
    )

}

export default ShowToDoDataTable;