import React from 'react';
import { Slide } from 'react-slideshow-image';



    const slideImages = [
  {
     'images/chambre1.jpg': 'Slide 1'
  },
  {
     'images/cuisine1.jpg': 'Slide 2'
  },
  {
     'images/douche1.jpg': 'Slide 3'
  },
];

const Slideshow = () => {
    return (
      <div className="slide-container">
        <Slide>
         {slideImages.map((slideImage, index)=> (
            <div className="each-slide" key={index}>
              <div style={{'backgroundImage': `url(${slideImage.url})`}}>
                <span>{slideImage.caption}</span>
              </div>
            </div>
          ))} 
        </Slide>
      </div>
    )

        

      
    
  }
  
  export default Slideshow;
  