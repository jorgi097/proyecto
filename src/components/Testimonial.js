import React from 'react';
import '../style-sheets/testimonial.css'

export function Testimonial(props){
  return (
    <div className='testimonial-container'>
      <img 
        className = 'testimonial-image'
        src={require(`../images/testimonio-${props.image}.png`)}
        alt={`Imagen de ${props.name}`}
      />
      <div className='text-testimonial-container'>
        <p className='testimonial-name'><strong>{props.name}</strong> en {props.country}</p>
        <p className='testimonial-position'>{props.position} en <strong>{props.company}</strong></p>
        <p className='testimonial-text'>{props.testimonial}</p>
      </div>
    </div>
  );
}

