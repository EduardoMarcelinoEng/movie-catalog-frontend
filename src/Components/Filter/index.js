import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button, Navbar, Form } from 'react-bootstrap';
import { Link, useSearchParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import http from './../../services/http';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import './style.css';
import utils from '../../utils';

export default function Filter(){

    const dispatch = useDispatch();
    const [searchParams] = useSearchParams();

    const [activePage] = useState(searchParams.get('activePage') || '');
    const [id, setId] = useState(searchParams.get('id') || '');
    const [title, setTitle] = useState(searchParams.get('title') || '');
    const [description, setDescription] = useState(searchParams.get('description') || '');
    const [director, setDirector] = useState(searchParams.get('director') || '');
    const [producer, setProducer] = useState(searchParams.get('producer') || '');

    const queryStringBuilder = ()=>{
        return `activePage=${activePage}&id=${id}&title=${title}&description=${description}&director=${director}&producer=${producer}`;
    }

    const toFilter = ()=>{
        let query = {
            activePage, id, title, description, director, producer
        }
        http.movie.load(query)
            .then(result=>dispatch({type: 'LOADED_MOVIE', payload: result.data}))
            .catch(error=>utils.createNotification({
                type: 'error',
                title: 'Erro ao filtrar filmes!',
                message: error && error.response && error.response.data ? error.response.data : ''
            }));
    }

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
                                <Link onClick={toFilter} to={`/?${queryStringBuilder()}`}>
                                    <Button variant="success">
                                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                                    </Button>
                                </Link>
                            </Form.Group>}
                        </Col>
                        
                    </Row>
                </Container>
            </Navbar.Collapse>
        </Navbar>
    );
}