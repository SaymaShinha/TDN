import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Table from 'react-bootstrap/Table';


function ShowDoneToDoList() {
    const [doneToDo, setDoneToDo] = useState([]);

    useEffect(() => {
        setDoneToDo(JSON.parse(localStorage.getItem("doneToDo")) || []);
    }, [])

    return (
        <>
            <Container className="mt-3">
                <h1>Done ToDo List</h1>
                <Table striped bordered hover responsive>
                    <thead>
                        <tr>
                            <td>#</td>
                            <td>ToDo</td>
                            <td>ToDo Created Time</td>
                            <td>ToDo Done Time</td>
                        </tr>
                    </thead>
                    <tbody>
                        {doneToDo.map((item, index) => (
                            <tr key={index + 1}>
                                <td>{index + 1}</td>
                                <td>{item.todo}</td>
                                <td>{item.todocreatedTime}</td>
                                <td>{item.todoDoneTime}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Container>
        </>
    )
}

export default ShowDoneToDoList;