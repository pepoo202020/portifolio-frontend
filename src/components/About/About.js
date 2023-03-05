import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import Particle from '../Particle';
import AboutCard from './AboutCard';


function About() {
    return (
        <Container fluid className='about-section'>
            <Particle />
            <Container >
                <Row style={{ justifyContent: 'center', padding: '10px' }}>
                    <Col md={12} style={{ justifyContent: 'center', paddingTop: '30px', paddingBottom: '50px' }}>
                        <h1 style={{ fontSize: '2.1rem', paddingTop: '20px' }}>
                            Introduce <strong className='purple'>Myself</strong>
                        </h1>

                        <AboutCard />
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

export default About