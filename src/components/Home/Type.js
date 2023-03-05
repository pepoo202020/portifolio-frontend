import React from 'react'
import Typewriter from 'typewriter-effect'
function Type() {
    return (
        <Typewriter
            options={{
                strings: [
                    'Web Developer',
                    'Full Stack Developer',
                    'MERN Stack Developer',
                    'Designer FIGMA && ADOBE'
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
            }}
        />
    )
}

export default Type