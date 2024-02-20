import React, { useState, useEffect } from 'react';
import frame1 from '../assets/jump/jump-1.png'
import frame2 from '../assets/jump/jump-2.png'
import frame3 from '../assets/jump/jump-3.png'
import frame4 from '../assets/jump/jump-4.png'
import frame5 from '../assets/jump/jump-5.png'
import frame6 from '../assets/jump/jump-6.png'
import frame7 from '../assets/jump/jump-7.png'
import './animation.css';

function JumpAnimation() {

    const frames = [frame1, frame2, frame3, frame4, frame5, frame6, frame7]

    const framesPerMS = 150
    const [frameIndex, setFrameIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() =>{
            setFrameIndex((prevIndex) => (prevIndex + 1) % frames.length);
        }, framesPerMS)

        return () => clearInterval(interval);
    }, []);

    return ( 
        <img src={frames[frameIndex]} alt={`Frame ${frameIndex}`} className='animation-image'></img>
    );
}

export default JumpAnimation;