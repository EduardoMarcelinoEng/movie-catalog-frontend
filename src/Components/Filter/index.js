import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button, Navbar, Form } from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import http from './../../services/http';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import './style.css';
import utils from '../../utils';

export default function Filter({ id, setId, description, title, setTitle, setDescription, director, setDirector, producer, setProducer, activePage }){

    const dispatch = useDispatch();
    const [searchParams, setSearchParams] = useSearchParams();

    const filter = ()=>{
        setSearchParams(`id=${id}&title=${title}&description=${description}&director=${director}&producer=${producer}`);
        dispatch({type: 'IS_LOADING_MOVIE', payload: true});
        http.movie.load({
            id,
            title,
            description,
            director,
            producer
        })
            .then(result=>dispatch({type: 'LOADED_MOVIE', payload: result.data}))
            .catch(error=>{
                utils.createNotification({
                    type: 'error',
                    title: 'Erro ao carregar filmes!',
                    message: error && error.response && error.response.data ? error.response.data : ''
                });
                dispatch({type: 'IS_LOADING_MOVIE', payload: false});
            });
    };

    return (
        <Navbar className='filter' expand="lg" style={{textTransform: 'uppercase'}}>
            <Navbar.Brand style={{marginRight: '50px'}}>
                <FontAwesomeIcon icon={faFilter} />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
                <Container>
                    <Row xs={1} md={4} lg={6}>
                        <Col>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Id</Form.Label>
                                <Form.Control value={ id } onChange={ e=>setId(e.target.value) } type="text" placeholder="Digite o id do filme" />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Título</Form.Label>
                                <Form.Control value={ title } onChange={ e=>setTitle(e.target.value) } type="text" placeholder="Digite o título do filme" />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Descrição</Form.Label>
                                <Form.Control value={ description } onChange={ e=>setDescription(e.target.value) } type="text" placeholder="Digite a descrição do filme" />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Diretor</Form.Label>
                                <Form.Control value={ director } onChange={ e=>setDirector(e.target.value) } type="text" placeholder="Digite o diretor do filme" />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Produtor</Form.Label>
                                <Form.Control value={ producer } onChange={ e=>setProducer(e.target.value) } type="text" placeholder="Digite o produtor do filme" />
                            </Form.Group>
                        </Col>
                        <Col>
                            {<Form.Group id="filter-btn" className="mb-3" controlId="formBasicEmail">
                                <Form.Label></Form.Label>
                                    <Button onClick={()=>filter({activePage: 1})} variant="success">
                                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                                    </Button>
                            </Form.Group>}
                        </Col>
                    </Row>
                </Container>
            </Navbar.Collapse>
        </Navbar>
    );
}