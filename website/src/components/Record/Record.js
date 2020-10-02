import React from 'react';
import { Container } from 'react-bootstrap';
import Winner from '../Winner/Winner';

function Record({title, description, winners}) {
  return (
    <Container fluid>
      <div className="d-flex justify-content-center">
        <h1>{title}</h1> 
      </div>
      <div className="d-flex justify-content-center">
        <h4>{description}</h4> 
      </div>
      <div className="d-flex flex-wrap justify-content-center">
        {winners.map((w, i) => {
          return <Winner key={i} place={w.place} name={w.name} year={w.year} info={w.info}/>
        })}
      </div>
    </Container>
  );
}

export default Record;