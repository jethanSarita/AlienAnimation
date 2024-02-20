import logo from './logo.svg';
import './App.css';
import Button from '@mui/material/Button';
import { Container, Stack } from '@mui/material';
import DockAnimation from './components/DockAnimation';
import JumpAnimation from './components/JumpAnimation';
import RightAnimation from './components/RightAnimation';
import LeftAnimation from './components/LeftAnimation';
import { useState } from 'react';


function App() {

  const [currentAnimation, setCurrentAnimation] = useState(null)

  const hoveredJump = () => {
    setCurrentAnimation('jump')
  }

  const hoveredLeft = () => {
    setCurrentAnimation('left')
  }

  const hoveredRight = () => {
    setCurrentAnimation('right')
  }

  const hoveredDock = () => {
    setCurrentAnimation('dock')
  }

  return (
    <div className='center'>
      <Stack>
        <div className='center'>
          <div className='buttons'>
            <Stack direction="row" spacing={2}>
              <button className='button' onMouseEnter={hoveredJump}>Jump</button>
              <button className='button' onMouseEnter={hoveredLeft}>Left</button>
              <button className='button' onMouseEnter={hoveredRight}>Right</button>
              <button className='button' onMouseEnter={hoveredDock}>Dock</button>
            </Stack>
          </div>
        </div>
        <div className='animation-container'>
          {currentAnimation === 'jump' && <JumpAnimation/>}
          {currentAnimation === 'left' && <LeftAnimation/>}
          {currentAnimation === 'right' && <RightAnimation/>}
          {currentAnimation === 'dock' && <DockAnimation/>}
        </div>
      </Stack>
    </div>
  );
}

export default App;
