import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Spinner } from 'react-bootstrap';
import Header from '../../Components/Header';
import MovieCard from '../../Components/MovieCard';
import { useSelector, useDispatch } from 'react-redux';
import Filter from '../../Components/Filter';
import http from '../../services/http';
import Footer from '../../Components/Footer';
import './style.css';
import { useSearchParams } from 'react-router-dom';
import utils from '../../utils';
import Pagination from '../../Components/Pagination';

export default function Home(){

    const { movies, isLoading, search } = useSelector(state=>state.movieState);
    const dispatch = useDispatch();
    const [searchParams, setSearchParams] = useSearchParams();

    //Fields of search
    const [activePage, setActivePage] = useState(Number(searchParams.get('activePage')) || 1);
    const [id, setId] = useState(searchParams.get('id') || '');
    const [title, setTitle] = useState(searchParams.get('title') || '');
    const [description, setDescription] = useState(searchParams.get('description') || '');
    const [director, setDirector] = useState(searchParams.get('director') || '');
    const [producer, setProducer] = useState(searchParams.get('producer') || '');

    const filter = ()=>{
        setSearchParams(`activePage=${activePage}&id=${id}&title=${title}&description=${description}&director=${director}&producer=${producer}`);
        dispatch({type: 'IS_LOADING_MOVIE', payload: true});
        http.movie.load({
            id,
            title,
            description,
            director,
            producer,
            activePage
        })
            .then(result=>dispatch({type: 'LOADED_MOVIE', payload: result.data}))
            .catch(error=>{
                utils.createNotification({
                    type: 'error',
                    title: 'Erro ao carregar filmes!',
                    message: error?.response?.data
                });
                dispatch({type: 'IS_LOADING_MOVIE', payload: false});
            });
    };

    useEffect(()=>{
        filter();
    }, []);

    return (
        <>
            <Header />
            <Container>
                <Row>
                    <Filter
                        id={ id }
                        setId={ setId }
                        title={ title }
                        setTitle={ setTitle }
                        description={ description }
                        setDescription={ setDescription }
                        director={ director }
                        setDirector={ setDirector }
                        producer={ producer }
                        setProducer={ setProducer }
                        activePage={ activePage }
                        filter={ filter }
                    />
                </Row>
                <Row>
                    {
                        isLoading ? <Spinner animation="border" /> : movies.map(({id, title, description, movie_banner, director, producer})=>(
                            <Col>
                                <MovieCard
                                    id={ id }
                                    title={ title }
                                    description={ description }
                                    image={ movie_banner }
                                    director={ director }
                                    producer={ producer }
                                />
                            </Col>
                        ))
                    }
                </Row>
                { search.totalPages > 1 ? <Row>
                    <Col className='pagination-col'>
                        <Pagination
                            activePage={ activePage }
                            setActivePage={ setActivePage }
                            totalPages={ search.totalPages }
                            filter={ filter }

                        />
                    </Col>
                </Row> : false }
                <Row>
                    <Footer />
                </Row>
            </Container>
        </>
    );
}