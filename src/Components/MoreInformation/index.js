import React from 'react';
import { Modal, Button, Container, Row, Col, Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faEye
} from '@fortawesome/free-solid-svg-icons';
import './style.css';

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
        <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
                Mais informações
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Container fluid>
                <Row>
                    <Col lg={ 6 }>
                        <Image src={props.image} />
                    </Col>
                    <Col lg={ 6 }>
                        <h2>{ props.title }</h2>
                        <p className='description'>{ props.description }</p>
                        <p className='director'><b>Diretor: </b>{ props.director }</p>
                        <p className='producer'><b>Produtor: </b>{ props.producer }</p>
                        <p className='id'><b>Id: </b>{ props.id }</p>
                    </Col>
                </Row>
            </Container>
        </Modal.Body>
        <Modal.Footer>
            <Button onClick={props.onHide}>Voltar</Button>
        </Modal.Footer>
    </Modal>
  );
}

function MoreInformation({ id, image, title, description, director, producer }) {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <div>
        <div className='center-element'>
            <Button title='Ver mais' onClick={() => setModalShow(true)}>
                <FontAwesomeIcon icon={ faEye } />
            </Button>
        </div>
        <MyVerticallyCenteredModal
            className='more-information-centered-modal'
            show={modalShow}
            onHide={() => setModalShow(false)}
            image={ image }
            title={ title }
            description={ description }
            director={ director }
            producer={ producer }
            id={ id }
        />
    </div>
  );
}

export default MoreInformation;