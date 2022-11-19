import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import './style.css';
import http from '../../services/http';
import utils from '../../utils';

function MyVerticallyCenteredModal(props) {

    const deleteDatabase = ()=>{
        props.onHide();
        http.movie.destroy()
            .then(result=>utils.createNotification({
                type: 'success',
                title: result.data
            }))
            .catch(error=>utils.createNotification({
                type: 'error',
                title: 'Erro ao deletar banco de dados!',
                message: error?.response?.data
            }));
    }

    return (
        <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className='database-delete-modal'
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Deletar banco de dados
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>Ao confirmar, todos os filmes do banco de dados serão apagados! Deseja prosseguir?</p>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Voltar</Button>
                <Button onClick={()=>deleteDatabase()}>Deletar</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default function DatabaseDelete() {
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <div className='database-delete'>
            <Button variant="primary" onClick={() => setModalShow(true)}>
                Deletar
            </Button>

            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </div>
    );
}