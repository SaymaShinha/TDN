import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Form from 'react-bootstrap/Form';
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import Table from 'react-bootstrap/Table';
import SplitButton from 'react-bootstrap/SplitButton';
import Dropdown from 'react-bootstrap/Dropdown';
import ShowToDoDataTable from "../../Components/ShowToDoDataTable";
import { useParams } from "react-router";

function AddToDo() {
    const { index } = useParams();

    const [toDo, setToDo] = useState("");
    const [lsToDo, setLsToDo] = useState([]);

    useEffect(() => {
        const todo = JSON.parse(localStorage.getItem("todo")) || [];
        setLsToDo(todo);

        if (index) {
            const getToDo = lsToDo[index];
            setToDo(getToDo.todo);
        }

    }, [])


    const addToDoBtnClicked = () => {
        const time = new Date().toLocaleString();

        if (toDo === "") {
            alert("Please fill the field.");
            return;
        } else {
            const newToDo = {
                todo: toDo,
                datetime: time
            };

            if (index) {
                const editedToDo = lsToDo;
                editedToDo[index] = newToDo;

                localStorage.setItem("todo", JSON.stringify(editedToDo));
                setLsToDo(editedToDo);

                alert("ToDo Edited");
            } else {
                const updatedToDo = [...lsToDo, newToDo];

                localStorage.setItem("todo", JSON.stringify(updatedToDo));
                setLsToDo(updatedToDo);

                alert("ToDo added");
            }
            setToDo("");
        }
    }

    return (
        <>
            <Container className="mt-3">
                <h1>Add ToDo</h1>

                <InputGroup className="mb-3">
                    <Form.Control type="text" placeholder="Enter ToDo" value={toDo} id="todoInputID" onChange={(e) => setToDo(e.target.value)} />
                    <InputGroup.Text as="button" onClick={() => addToDoBtnClicked()} className="btn btn-primary">Add ToDo</InputGroup.Text>
                </InputGroup>

                <hr />

                <ShowToDoDataTable lsToDo={lsToDo} setLsToDo={setLsToDo} />
            </Container>
        </>
    )
}

export default AddToDo;