import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import './style.css';
import http from '../../services/http';
import utils from '../../utils';

function MyVerticallyCenteredModal(props) {

    const updateDatabase = ()=>{
        props.onHide();
        http.movie.findApi()
            .then(()=>utils.createNotification({
                type: 'success',
                title: 'Banco de dados atualizado!'
            }))
            .catch(error=>utils.createNotification({
                type: 'error',
                title: 'Erro ao atualizar banco de dados!',
                message: error.response.data
            }));
    }

    return (
        <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className='database-update-modal'
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Atualizar banco de dados
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>Ao confirmar, os filmes do banco de dados serão atualizados!</p>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Voltar</Button>
                <Button onClick={()=>updateDatabase()}>Atualizar</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default function DatabaseUpdate() {
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <div className='database-update'>
            <Button variant="primary" onClick={() => setModalShow(true)}>
                Atualizar
            </Button>

            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </div>
    );
}