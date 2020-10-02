import React from 'react';
import Record from '../Record/Record';

function Records({fish}) {
  // Data already comes in sorter by Oz
  const getLargestFish = () => {
    // This logic doesn't handle ties
    const winner = {
      place: 1,
      name: fish[0].Name,
      year: fish[0].Year,
      info: [
        `Species: ${fish[0].Species}`,
        `Weight: ${fish[0].Weight}`
      ]
    };

    const second = {
      place: 2,
      name: fish[1].Name,
      year: fish[1].Year,
      info: [
        `Species: ${fish[1].Species}`,
        `Weight: ${fish[1].Weight}`
      ]
    };

    const third = {
      place: 3,
      name: fish[2].Name,
      year: fish[2].Year,
      info: [
        `Species: ${fish[2].Species}`,
        `Weight: ${fish[2].Weight}`
      ]
    };

    return {
      'title': 'Largest Fish',
      'description': 'Largest Fish Of Any Species By Weight',
      'winners': [winner, second, third]
    }
  }

  const getLargestRainbow = () => {
    const winners = fish.filter(f => {
      return f.SpeciesCode.toLowerCase() === 'r'
    })

    // This logic doesn't handle ties
    const winner = {
    'place': 1,
    'name': winners[0].Name,
    'year': winners[0].Year,
    'info': [`Weight: ${winners[0].Weight}`]
    }

    const second = {
      'place': 2,
      'name': winners[1].Name,
      'year': winners[1].Year,
      'info': [`Weight: ${winners[1].Weight}`]
      }

    const third = {
      'place': 3,
      'name': winners[2].Name,
      'year': winners[2].Year,
      'info': [`Weight: ${winners[2].Weight}`]
      }

    return {
      'title': 'Largest Rainbow',
      'description': 'Largest Rainbow Trout By Weight',
      'winners': [winner, second, third]
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