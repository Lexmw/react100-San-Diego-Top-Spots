import React from 'react';

export default props => {       
return (
        <div className='well wellStyle'>
        <h4>{props.name}</h4>
        <p>{props.description}</p>
        <a href={`https://maps.google.com/?q=${props.location[0]},${props.location[1]}`}><button className='btn btn-primary btnFont'>Location here!</button></a>
        </div>
       );
};
