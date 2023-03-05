import React from 'react'
import Card from 'react-bootstrap/Card'
import { ImPointRight } from 'react-icons/im'
import challengCourse from '../../Assets/chellange_course.png'
import nanoCourse from '../../Assets/nanoDegree.png'

function AboutCard() {
    return (
        <Card className='quote-card-view'>
            <Card.Body>
                <blockquote className='blockqoute mb-0'>
                    <p style={{ textAlign: 'center' }}>
                        Hi everyone , I'm <span className='purple'>Abanob Shenoda Tawfik</span>, <strong className='purple'>Full Stack Developer</strong> from <span className='purple'>Asyut , Egypt</span>
                        <br />
                        Graduated From asyut university college of Engineering with total grade <span className='purple'>Good</span>, and with graduation project grade <span className='purple'>Excellent</span>
                        <br />
                        after graduation , learnt some of good courses in youtube about web programing languages specifically in front end development languages, i entered in languages directly because i already learnt in college programing language <span className='purple'>C++</span>, so i learnt beginnings in front end languages like <span className='purple'>HTML , CSS , JAVASCRIPT</span>
                        <br />
                        after this step, i successfully joined three Excellent courses, in platform <strong className='purple'>UDACITY</strong>,
                        <ol>
                            <li className='courses-list purple'>
                                <a href='https://drive.google.com/file/d/1Jr3jw1P0pfjTWoNcbuPyzNXiBanCCLsw/view?usp=sharing' target="_blank" rel="noreferrer">challenge front end development course , and completed</a>
                                <br />
                                <img src={challengCourse} className='img-fluid' alt='course' />
                            </li>

                            <li className='purple'>
                                <a href='https://drive.google.com/file/d/1VcLf_ZHofTgqdcYzCVkbc00xMTvNgwg0/view?usp=sharing' target="_blank" rel="noreferrer">
                                    Nano Degree course for Front-end development , and completed
                                </a>
                                <br />
                                <img src={nanoCourse} className='img-fluid' alt='course' />
                            </li>
                            <li className='purple'>Nano Degree course for full-stack development , and still on it </li>

                        </ol>
                    </p>
                </blockquote>
            </Card.Body>
        </Card>
    )
}

export default AboutCard