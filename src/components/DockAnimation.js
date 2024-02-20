import React, { useState, useEffect } from 'react';
import frame1 from '../assets/dock/dock-1.png'
import frame2 from '../assets/dock/dock-2.png'
import frame3 from '../assets/dock/dock-3.png'
import frame4 from '../assets/dock/dock-4.png'
import frame5 from '../assets/dock/dock-5.png'
import './animation.css';

function DockAnimation() {

    const frames = [frame1, frame2, frame3, frame4, frame5]

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

export default DockAnimation;