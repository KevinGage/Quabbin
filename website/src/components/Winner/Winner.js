import React from 'react';

function Winner({place, name, year, info}) {
  return (
    <div>
      {place}<br />
      {name}<br />
      {year}<br />
      {info.map((info) => {
        return <div>{info}</div>
      })}
    </div>
  );
}

export default Winner;