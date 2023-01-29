import React from 'react';

const Card = (props) => {
return (
<div className={`card ${props.className}`}>
<img src={props.imgSrc} alt={props.imgAlt} />
<h3>{props.title}</h3>
<p>{props.description}</p>
</div>
)
}

export default Card
