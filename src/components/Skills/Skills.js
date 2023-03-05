import React from 'react'
import { Col, Container, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import { BsFillBootstrapFill, BsWordpress } from 'react-icons/bs'
import { GiJasmine } from 'react-icons/gi'
import { FiFigma } from 'react-icons/fi'
import { FaChrome } from 'react-icons/fa'
import {
    DiJavascript1,
    DiReact,
    DiNodejs,
    DiMongodb,
    DiGit,
    DiCss3,
    DiJqueryLogo,
    DiPhp,
    DiMysql,
    DiSublime,
} from "react-icons/di";
import {
    SiFirebase,
    SiExpress,
    SiTypescript,
    SiPostgresql,
    SiTailwindcss,
    SiVisualstudiocode,
    SiAdobephotoshop,
    SiAdobexd,
    SiAdobeillustrator,
    SiPostman,
} from "react-icons/si";
import { AiFillGithub, AiFillHtml5 } from 'react-icons/ai'
import Particle from '../Particle'
function Skills() {
    return (

        <Container fluid>
            <Particle />
            <Container>
                <h1 className="project-heading" style={{ paddingTop: "80px", color: 'white' }}>
                    Professional <strong className="purple">Skills</strong>
                </h1>
                <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
                    <Col xs={4} md={2} className="tech-icons">
                        <CgCPlusPlus />
                    </Col>
                    <Col xs={4} md={2} className="tech-icons">
                        <AiFillHtml5 />
                    </Col>
                    <Col xs={4} md={2} className="tech-icons">
                        <DiCss3 />
                    </Col>

                    <Col xs={4} md={2} className="tech-icons">
                        <BsFillBootstrapFill />
                    </Col>

                    <Col xs={4} md={2} className="tech-icons">
                        <SiTailwindcss />
                    </Col>

                    <Col xs={4} md={2} className="tech-icons">
                        <DiJavascript1 />
                    </Col>

                    <Col xs={4} md={2} className="tech-icons">
                        <DiJqueryLogo />
                    </Col>

                    <Col xs={4} md={2} className="tech-icons">
                        <DiPhp />
                    </Col>
                    <Col xs={4} md={2} className="tech-icons">
                        <BsWordpress />
                    </Col>

                    <Col xs={4} md={2} className="tech-icons">
                        <DiNodejs />
                    </Col>
                    <Col xs={4} md={2} className="tech-icons">
                        <SiExpress />
                    </Col>
                    <Col xs={4} md={2} className="tech-icons">
                        <SiTypescript />
                    </Col>
                    <Col xs={4} md={2} className="tech-icons">
                        <SiTypescript />
                    </Col>
                    <Col xs={4} md={2} className="tech-icons">
                        <DiReact />
                    </Col>
                    <Col xs={4} md={2} className="tech-icons">
                        <DiMysql />
                    </Col>

                    <Col xs={4} md={2} className="tech-icons">
                        <DiMongodb />
                    </Col>

                    <Col xs={4} md={2} className="tech-icons">
                        <SiPostgresql />
                    </Col>

                    <Col xs={4} md={2} className="tech-icons">
                        <SiFirebase />
                    </Col>

                    <Col xs={4} md={2} className="tech-icons">
                        <GiJasmine />
                    </Col>

                    <Col xs={4} md={2} className="tech-icons">
                        <DiGit />
                    </Col>

                    <Col xs={4} md={2} className="tech-icons">
                        <AiFillGithub />
                    </Col>
                </Row>
            </Container>

            <Container>
                <h1 className="project-heading" style={{ paddingTop: "20px", color: 'white', paddingBottom: '20px' }}>
                    Tools <strong className="purple">Used</strong>
                </h1>
                <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
                    <Col xs={4} md={2} className="tech-icons">
                        <SiVisualstudiocode />
                    </Col>

                    <Col xs={4} md={2} className="tech-icons">
                        <DiSublime />
                    </Col>

                    <Col xs={4} md={2} className="tech-icons">
                        <SiAdobephotoshop />
                    </Col>

                    <Col xs={4} md={2} className="tech-icons">
                        <SiAdobeillustrator />
                    </Col>

                    <Col xs={4} md={2} className="tech-icons">
                        <FiFigma />
                    </Col>

                    <Col xs={4} md={2} className="tech-icons">
                        <SiAdobexd />
                    </Col>

                    <Col xs={4} md={2} className="tech-icons">
                        <SiPostman />
                    </Col>

                    <Col xs={4} md={2} className="tech-icons">
                        <FaChrome />
                    </Col>
                </Row>
            </Container>
        </Container>
    );

}

export default Skills
