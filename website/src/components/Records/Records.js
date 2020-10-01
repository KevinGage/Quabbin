import React from 'react';
import Record from '../Record/Record';

function Records({fish}) {
  const getLargestFish = () => {
    const winner = fish.reduce((a, c) => {
      if (a.Oz < c.Oz) {
        return c;
      }
      return a;
    });

    const info = {
      place: 1,
      name: winner.Name,
      year: winner.Year,
      info: [
        `Species: ${winner.Species}`,
        `Weight: ${winner.Weight}`
      ]
    };

    return {
      'title': 'Largest Fish',
      'description': 'Largest Fish Of Any Species By Weight',
      'winners': [info]
    }
  }

  const getLargestRainbow = () => {
    const winners = fish.filter(f => {
      return f.SpeciesCode.toLowerCase() === 'r'
    }).sort((a,b) => {
      return b.Oz - a.Oz;
    });

    const winner = {
    'place': 1,
    'name': winners[0].Name,
    'year': winners[0].Year,
    'info': [`Weight: ${winners[0].Weight}`]
    }

    return {
      'title': 'Largest Rainbow',
      'description': 'Largest Rainbow Trout By Weight',
      'winners': [winner]
    }
  }

  const records = [];
  records.push(getLargestFish());
  records.push(getLargestRainbow());

  return (
    <div>
      {records.map((r, i) => {
        return(
          <div key={r.title}>
            <Record
              key={r.title}
              title={r.title}
              description={r.description}
              winners={r.winners}
            />
            <hr/>
          </div>
        )
      })}
    </div>
  );
}

export default Records;