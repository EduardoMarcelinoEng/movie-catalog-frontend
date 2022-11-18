import React, { useEffect } from 'react';
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

export default function Home(){

    const { movies, isLoading, pagination } = useSelector(state=>state.movieState);
    const dispatch = useDispatch();
    const [searchParams] = useSearchParams();

    const queryObject = {
        id: searchParams.get('id') || '',
        title: searchParams.get('title') || '',
        description: searchParams.get('description') || '',
        director: searchParams.get('director') || '',
        producer: searchParams.get('producer') || '',
        activePage: searchParams.get('activePage') || ''
    }

    useEffect(()=>{
        dispatch({type: 'IS_LOADING_MOVIE', payload: true});
        http.movie.load(queryObject)
            .then(result=>dispatch({type: 'LOADED_MOVIE', payload: result.data}))
            .catch(error=>{
                console.log('Olhar', error.response);
                utils.createNotification({
                    type: 'error',
                    title: 'Erro ao carregar filmes!',
                    message: error && error.response && error.response.data ? error.response.data : ''
                });
                dispatch({type: 'IS_LOADING_MOVIE', payload: false});
            });
    }, []);

    return (
        <>
            <Header />
            <Container>
                <Row>
                    <Filter />
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
                {/*pagination.totalPages > 1 ? <Row>
                    <Pagination
                        totalPages={ pagination.totalPages }
                        active={ pagination.active }
                        setPageCurrent={ obj=>dispatch({ type: 'SET_PAGE_CURRENT_MOVIE', payload: obj }) }
                    />
                </Row> : false*/}
                <Row>
                    <Footer />
                </Row>
            </Container>
        </>
    );
}