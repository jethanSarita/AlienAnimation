import React, { useState , useEffect } from 'react'
import frame1 from '../assets/right/right-1.png'
import frame2 from '../assets/right/right-2.png'
import frame3 from '../assets/right/right-3.png'
import frame4 from '../assets/right/right-4.png'
import frame5 from '../assets/right/right-5.png'
import frame6 from '../assets/right/right-6.png'
import frame7 from '../assets/right/right-7.png'
import frame8 from '../assets/right/right-8.png'
import frame9 from '../assets/right/right-9.png'
import frame10 from '../assets/right/right-10.png'
import frame11 from '../assets/right/right-11.png'
import './animation.css';

function RightAnimation() {

    const frames = [frame1, frame2, frame3, frame4, frame5, frame6, frame7, frame8, frame9, frame10, frame11]

    const framesPerMS = 150
    const [frameIndex, setFrameIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() =>{
            setFrameIndex((prevIndex) => (prevIndex + 1) % frames.length);
        }, framesPerMS)

        return () => clearInterval(interval);
    }, []);
    
    return ( 
        <img src={frames[frameIndex]} alt={'Frame ${frameIndex}'} className='animation-image'></img>
    );
}

export default RightAnimation;