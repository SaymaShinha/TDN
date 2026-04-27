import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import SplitButton from 'react-bootstrap/SplitButton';
import Dropdown from 'react-bootstrap/Dropdown';
import { useNavigate } from 'react-router';
import { useEffect, useState } from 'react';


function ShowDataTable() {
    const [notes, setNotes] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const text = JSON.parse(localStorage.getItem("notes")) || [];
        setNotes(text);
        console.log(notes);
    }, [])

    const deleteAll = () => {
        localStorage.clear();
        setNotes([]);
    }

    const deleteSingleNote = (index) => {
        const updated = notes.filter((note, i) => i !== index);
        localStorage.setItem("notes", JSON.stringify(updated));
        setNotes(updated);
    }
    const filterInputChange = (e) => {
        const text = JSON.parse(localStorage.getItem("notes")) || [];
        const filteredNotes = text.filter((n) => n["note"].match(e.target.value) || n["title"].match(e.target.value));

        setNotes(filteredNotes);
    }

    return (
        <>
            <InputGroup className="mb-3">
                <Form.Control aria-label="Text input with dropdown button" placeholder='Search Note by title or note words' onChange={(e) => filterInputChange(e)} />
            </InputGroup>

            <Table striped bordered hover responsive>
                <thead>
                    <tr>
                        <td>#</td>
                        <td>Title</td>
                        <td>Note</td>
                        <td>DateTime</td>
                        <td>Details</td>
                        <td>Edit</td>
                        <td>Delete</td>
                    </tr>
                </thead>
                <tbody>
                    {notes.map((item, index) => (
                        <tr key={index + 1}>
                            <td>{index + 1}</td>
                            <td>{item.title}</td>
                            <td>{item.note}</td>
                            <td>{item.datetime}</td>
                            <td>
                                <button className="btn btn-primary" onClick={() => navigate(`/single-note-details/${index}`)}>Details</button>
                            </td>
                            <td>
                                <button className="btn btn-warning" onClick={() => navigate(`/add-note/${index}`)}>Edit</button>
                            </td>
                            <td>
                                <button className="btn btn-danger" onClick={() => deleteSingleNote(index)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>

            <div className="text-end mb-3">
                <button className="btn btn-danger" onClick={() => deleteAll()}>Clear All</button>
            </div>
        </>
    );
}

export default ShowDataTable;
