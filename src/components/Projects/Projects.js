
import React, { useEffect, useState } from 'react'
import { Badge, Button, Card, CardGroup, Col, Container, ListGroup, Row } from 'react-bootstrap'
import Particle from '../Particle'

function Projects() {

    const [projects, setProjects] = useState([])

    useEffect(() => {
        fetch('https://mern-portifolio-api.onrender.com/projects/').then(res => res.json()).then(data => {
            console.log(data.projects)
            setProjects(data.projects)
        })
    }, [])

    return (
        <Container fluid>
            <Particle />
            <Container>
                <h1 className='project-heading' style={{ paddingTop: '50px' }}>
                    <strong className='purple'>Projects</strong>
                </h1>
                <Row xs={1} md={3} className="g-4">
                    {projects.map((project) => (
                        <Col key={project._id}>
                            <Card className='overflow-hidden w-100 p-0 rounded-2 h-100 project-card'>
                                <Card.Img variant='top' src={project.image} />
                                <Card.Body>
                                    <Row md={6} className='w-100 d-flex justify-content-start mb-2 align-items-center'>
                                        {
                                            project.languages.map((language, index) => (
                                                <Badge key={index} className='m-1' bg='primary'>{language}</Badge>
                                            ))
                                        }
                                    </Row>
                                    <Card.Title className='purple'><strong>{project.title}</strong></Card.Title>
                                    <Card.Text>{project.description}</Card.Text>

                                </Card.Body>
                                <Button variant="outline-info" target='_blank' className='border-0 text-decoration-none w-100 text-black' href={project.link}>
                                    Project Link
                                </Button>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>

        </Container>
    )
}

export default Projects