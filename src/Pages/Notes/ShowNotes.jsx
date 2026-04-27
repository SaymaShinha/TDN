import Container from 'react-bootstrap/Container';
import ShowDataTable from '../../Components/ShowDataTable.jsx';
import { useNavigate } from 'react-router';

function ShowNotes() {
    const navigate = useNavigate();

    return (
        <>
            <Container className='mt-3'>
                <div className="row p-3">
                    <div className='text-start col-12'>
                        <button className="btn btn-primary" onClick={() => navigate(`/add-note`)}>+</button>
                    </div>
                </div>
                <ShowDataTable />

            </Container>
        </>

    );
}

export default ShowNotes;