import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/image.jpeg";
import Tilt from "react-parallax-tilt";
import {
    AiFillGithub,
    AiOutlineTwitter,
    AiFillInstagram,
    AiFillFacebook,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function HomeSection2() {
    return (
        <Container
            fluid
            className='home-about-section'
            id='about'
        >
            <Container>
                <Row>
                    <Col
                        md={8}
                        className="home-about-description"
                    >
                        <h1 style={{ fontSize: '2.5rem' }} >
                            LET ME <span className='purple'>INTRODUCE</span> MYSELF
                        </h1>

                        <p className='home-about-body'>
                            <span className='purple'>Abanob Shenoda Tawfik</span>, 26 years old , from Asyut , Egypt
                            <br />
                            Junior full stack developer with a passion for learning new technologies and working with teams to create user-friendly web applications. Over three years of experience in web development, including front-end and back-end technologies. Eager to develop skills in a fast-paced environment and contribute to the success of a company
                        </p>
                    </Col>

                    <Col md={4} className='myAvatar'>
                        <Tilt>
                            <img src={myImg} className='img-fluid' alt='avatar' />
                        </Tilt>
                    </Col>
                </Row>

                <Row>
                    <Col md={12} className='home-about-social'>
                        <h1>Find Me On</h1>
                        <p>Feel free to <span className="purple">connect </span>with me</p>
                        <ul className='home-about-social-links'>
                            <li className='social-icons'>
                                <a href='https://github.com/pepoo202020' target='_blank' rel='noreferrer' className='icon-color home-social-icons'>
                                    <AiFillGithub />
                                </a>
                            </li>

                            <li className="social-icons">
                                <a
                                    href="https://twitter.com/ShoshPopo"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-color  home-social-icons"
                                >
                                    <AiOutlineTwitter />
                                </a>
                            </li>

                            <li className="social-icons">
                                <a
                                    href="https://www.linkedin.com/in/pepooshosh2020/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-color  home-social-icons"
                                >
                                    <FaLinkedinIn />
                                </a>
                            </li>
                            <li className="social-icons">
                                <a
                                    href="https://www.instagram.com/pamposhosh/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-color home-social-icons"
                                >
                                    <AiFillInstagram />
                                </a>
                            </li>
                            <li className="social-icons">
                                <a
                                    href="https://www.facebook.com/abanob.shosh/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-color home-social-icons"
                                >
                                    <AiFillFacebook />
                                </a>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

export default HomeSection2