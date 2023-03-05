import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from '../Particle';
import HomeSection2 from './HomeSection2';
import Type from './Type';
function Home() {
    return (
        <section>
            <Container fluid className='home-section' id='home'>
                <Particle />
                <Container className='home-content'>
                    <Row>
                        <Col md={7} className="home-header">
                            <h1 style={{ paddingBottom: 15 }} className="heading">
                                hi there!{" "}
                            </h1>

                            <h1 className='heading-name'>
                                I'm
                                <strong className='main-name'>ABANOB SHENODA</strong>
                            </h1>

                            <div style={{ padding: 50, textAlign: "left" }}>
                                <Type />
                            </div>
                        </Col>

                        <Col md={5} style={{ paddingBottom: 20 }}>
                            <img
                                src={homeLogo}
                                alt="home pic"
                                className='img-fluid'
                                style={{ maxHeight: "450px" }}
                            />
                        </Col>
                    </Row>
                </Container>
            </Container>
            <HomeSection2 />
        </section>
    )
}

export default Home