import { useParams } from "react-router";


function ShowSingleNote() {
    const { index } = useParams();

    const notes = JSON.parse(localStorage.getItem("notes"));
    const note = notes[index];

    return (
        <>
            <div className="container p-5">
                <div className="row">
                    <div className="col-6 text-start">{note.title}</div>
                    <div className="col-6 text-end">{note.datetime}</div>
                </div>
                <hr />
                <div>
                   <div>
                    <p style={{textDecoration:"ltr"}}>{note.note}</p>
                   </div>
                </div>
            </div>
        </>
    );

}

export default ShowSingleNote;