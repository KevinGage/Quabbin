import React from 'react';
import Record from '../Record/Record';
import data from '../../data/data.json';

function Records({fishermen, species}) {
  const stringToOunces = (s) => {
    const stringParts = s.split('.');
    return (parseInt(stringParts[0]) * 16) + parseInt(stringParts[1]);
  }

  const getLargestFish = () => {
    const winner = fishermen.map((fm) => {
      fm.Fish.sort((a,b) => {
        return stringToOunces(b.Weight) - stringToOunces(a.Weight);
      });

      return {
        'name': fm.Name,
        'species': fm.Fish[0].Species,
        'weight': fm.Fish[0].Weight,
        'year': fm.Fish[0].Year
      }
    }).reduce((a, c) => {
      if (a.weight < c.weight) {
        return c;
      }
      return a;
    });

    const info = [
      winner.name,
      winner.species,
      winner.weight,
      winner.year
    ];

    return {
      'title': 'Largest Fish',
      'description': 'Largest Fish Of Any Species By Weight',
      'info': info
    }
  }

  const getLargestRainbow = () => {
    const winner = fishermen.map((fm) => {
      fm.Fish = fm.Fish.filter(f => {
        return f.Species.toLowerCase() === 'r'
      }).sort((a,b) => {
        return stringToOunces(b.Weight) - stringToOunces(a.Weight);
      });

      return {
        'name': fm.Name,
        'weight': fm.Fish.length > 0 ? fm.Fish[0].Weight : 0,
        'year': fm.Fish.length > 0 ? fm.Fish[0].Year : undefined
      }

    }).reduce((a, c) => {
      if (a.weight < c.weight) {
        return c;
      }
      return a;
    });

    const info = [
      winner.name,
      winner.species,
      winner.weight,
      winner.year
    ];

    return {
      'title': 'Largest Rainbow',
      'description': 'Largest Rainbow Trout By Weight',
      'info': info
    }
  }

  const records = [];
  records.push(getLargestFish());
  records.push(getLargestRainbow());

  return (
    <div>
      {records.map(r => {
        return(
          <Record
            key={r.title}
            title={r.title}
            description={r.description}
            info={r.info}
          />
        )
      })}
    </div>
  );
}

export default Records;