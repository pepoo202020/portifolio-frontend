import React, { useEffect, useState } from 'react'
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import pdf from '../../Assets/cv.pdf'
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import Particle from '../Particle';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`
const resumeLink = 'https://drive.google.com/uc?export=download&id=1jlUxD-odvg4-XLxgnZijmAB7WkNWI9JZ';

function Resume() {
    const [width, setWidth] = useState(1200)

    useEffect(() => {
        setWidth(window.innerWidth)
    }, [])
    return (
        <div>
            <Container fluid className='resume'>
                <Particle />
                <Row style={{ justifyContent: "center", position: "relative", paddingTop: '80px' }}>
                    <Button
                        variant="primary"
                        href={pdf}
                        target="_blank"
                        style={{ maxWidth: "250px" }}
                    >
                        <AiOutlineDownload />
                        &nbsp;Download CV
                    </Button>
                </Row>
            </Container>
        </div>
    )
}

export default Resume
