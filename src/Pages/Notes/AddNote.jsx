import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';


function AddNote() {
    const { index } = useParams();
    const [note, setNote] = useState("");
    const [title, setTitle] = useState("");

    useEffect(() => {
        if (index) {
            const notes = JSON.parse(localStorage.getItem("notes")) || [];
            const getNote = notes[index];

            setNote(getNote.note);
            setTitle(getNote.title);
        }
    }, [])

    const addNoteBtnClicked = () => {
        const time = new Date().toLocaleString();

        if (title === "" || note === "") {
            alert("Please fill in all fields");
            return;
        } else {
            const newNote = {
                title: title,
                note: note,
                datetime: time
            };

            let notes = JSON.parse(localStorage.getItem("notes")) || [];

            if (index) {
                const editedNotes = notes;
                editedNotes[index] = newNote;

                localStorage.setItem("notes", JSON.stringify(editedNotes));

                alert("Note Edited");
            } else {
                notes.push(newNote);
                localStorage.setItem("notes", JSON.stringify(notes));

                alert("Note added");
            }

            setNote("");
            setTitle("");
        }

    }

    return (
        <div>
            <Container>
                <h1>Add Note</h1>
                <Form>
                    <Form.Group className="mb-3" controlId="noteTitle">
                        <div className='row'>
                            <div className='col-3'>
                                <Form.Label className="col-3">Title:</Form.Label>
                            </div>
                            <div className='col-8'>
                                <Form.Control className="col-8" type="text" placeholder="Enter note title." value={title} onChange={(e) => setTitle(e.target.value)} />
                            </div>
                        </div>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="noteContent">
                        <div className='row'>
                            <div className='col-3'>
                                <Form.Label className="col-2">Note:</Form.Label>
                            </div>
                            <div className='col-8'>
                                <Form.Control className="col-10" as="textarea" placeholder="Please type your note." rows={3} value={note} onChange={(e) => setNote(e.target.value)} />
                            </div>
                        </div>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="addNoteButton">
                        <div className="row">
                            <div className="col-11 text-end">
                                <Button variant="outline-primary" onClick={() => addNoteBtnClicked()}>
                                    Add Note
                                </Button>
                            </div>
                            <div></div>
                        </div>
                    </Form.Group>
                </Form>
            </Container>
        </div>
    );
}

export default AddNote;