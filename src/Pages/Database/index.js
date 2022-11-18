import React from "react";
import { Container, Row, Col, Spinner, Table } from 'react-bootstrap';
import Header from '../../Components/Header';
import Footer from "../../Components/Footer";
import Update from '../../Components/DatabaseUpdate';
import Delete from "../../Components/DatabaseDelete";
import './style.css';

export default function Database(){
    return (
        <div className="database">
            <Header />
            <Container>
                <Row>
                    <Col>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>API para atualizar os filmes</th>
                                    <th>Ações</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>https://ghibliapi.herokuapp.com/films</td>
                                    <td>
                                        <Update />
                                        <Delete />
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                </Row>
                <Row>
                    <Footer />
                </Row>
            </Container>
        </div>
    );
}