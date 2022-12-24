import React, { useState } from 'react';
import WestIcon from '@mui/icons-material/West';
import EastIcon from '@mui/icons-material/East';
import './Slider.scss';

const data = [
    "https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1591085686350-798c0f9faa7f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80",
    "https://images.unsplash.com/photo-1573855619003-97b4799dcd8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
];

const Slider = () => {

    const [currentSlide, setCurrentSlide] = useState(0);

    const prevSlide = () => {
        //if currentSlide is '0' i make it 2, if is not will be decrees by '-1' //data=[0,1,2]
        setCurrentSlide(currentSlide === 0 ? 2 : currentSlide - 1);
    };

    const nextSlide = () => {
        //if currentSlide is '2' i make it 0, if is not will be increased by '+1' //data=[0,1,2]
        setCurrentSlide(currentSlide === 2 ? 0 : currentSlide + 1);
    }

  return (
    <div className='slider'>
        <div className="container" style={{transform:`translateX(-${currentSlide * 100}vw)`}}>
            <img src={data[0]} alt="" />
            <img src={data[1]} alt="" />
            <img src={data[2]} alt="" />
        </div>
        <div className="icons">
            <div className="icon" onClick={prevSlide}>
                <WestIcon/>
            </div>
            <div className="icon" onClick={nextSlide}>
                <EastIcon/>
            </div>
        </div>
    </div>
  )
}

export default Slider