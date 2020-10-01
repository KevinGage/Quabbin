import React from 'react';
import Record from '../Record/Record';
import stringToOunces from '../../util/ToOz';

function Records({fishermen, species}) {
  // add oz property to all fish
  // sort fish smallest to largest
  fishermen = fishermen.map((fm) => {
    fm.Fish = fm.Fish.map(f => {
      return {
        ...f,
        'oz': stringToOunces(f.Weight)
      }
    }).sort((a,b) => {
      return b.oz - a.oz;
    });

    return {
      ...fm
    }
  });

  const getLargestFish = () => {
    const winner = fishermen.reduce((a, c) => {
      if (a.Fish[0].oz < c.Fish[0].oz) {
        return c;
      }
      return a;
    });

    const info = [
      winner.Name,
      winner.Fish[0].Species,
      winner.Fish[0].Weight,
      winner.Fish[0].Year
    ];

    return {
      'title': 'Largest Fish',
      'description': 'Largest Fish Of Any Species By Weight',
      'info': info
    }
  }

  const getLargestRainbow = () => {
    const winner = fishermen.reduce((a, c) => {
      const rainbows = c.Fish.filter(f => {
        return f.Species.toLowerCase() === 'r'
      }).sort((a,b) => {
        return b.oz - a.oz;
      });

      if (rainbows.length > 0) {
        if (a.oz < rainbows[0].oz) {
          return {
            'name': c.Name,
            'weight': rainbows[0].Weight,
            'oz': rainbows[0].oz,
            'year': rainbows[0].Year
          }
        }
      }
      return a;
    }, {'oz': -1});

    const info = [
      winner.name,
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