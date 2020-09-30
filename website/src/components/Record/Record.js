import React from 'react';

function Record({title, description, info}) {
  return (
    <div>
      {title}
      {description}
      {info}
    </div>
  );
}

export default Record;