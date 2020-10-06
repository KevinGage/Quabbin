import React from 'react';
import styles from './Stats.module.css';
import { Container } from 'react-bootstrap';
import { ResponsiveLine } from '@nivo/line'

function Stats({fish}) {
  // Just use Oz to make things easier for now
  const averageFishWeightPerYear = fish.sort((a,b) => {
    return a.Year - b.Year;
  }).reduce((a,c)=> {
    if (c.Species === ""){
      return a;
    }
    const speciesIndex = a.findIndex(e => e.id === c.Species);
    if (speciesIndex > -1) {
      const yearIndex = a[speciesIndex].data.findIndex(e => e.x === c.Year);
      if (yearIndex > -1) {
        a[speciesIndex].data[yearIndex].totalOz += c.Oz;
        a[speciesIndex].data[yearIndex].Count += 1;
        a[speciesIndex].data[yearIndex].y = a[speciesIndex].data[yearIndex].totalOz / a[speciesIndex].data[yearIndex].Count;
      } else {
        const y = c.Oz;
        a[speciesIndex].data.push({
          'x': c.Year,
          'totalOz': c.Oz,
          'Count': 1,
          'y': y
        });
      }
    } else {
      const y = c.Oz;
      a.push({
        'id': c.Species,
        'data': [
          {
            'x': c.Year,
            'totalOz': c.Oz,
            'Count': 1,
            'y': y
          }
        ]
      });
    }
    return a;
  }, []);

  const fishCountPerYear = averageFishWeightPerYear.map(x => {
    return {
      id: x.id,
      data: x.data.map(y => {
        return {
          x: y.x,
          y: y.Count
        }
      })
    }
  })

  return (
    <Container fluid>
      <div className="d-flex flex-wrap justify-content-center">
        <div className={styles.chartContainer}>
        <ResponsiveLine
          data={averageFishWeightPerYear}
          margin={{ top: 55, right: 165, bottom: 55, left: 25 }}
          curve="monotoneX"
          colors={{ scheme: 'paired' }}
          axisBottom={{
            orient: 'bottom',
            // tickSize: 5,
            // tickPadding: 5,
            // tickRotation: 0,
            legend: 'Average Weight Of Fish Per Year By Species',
            legendOffset: 36,
            legendPosition: 'middle'
          }}
          legends={[
            {
              anchor: 'bottom-right',
              direction: 'column',
              justify: false,
              translateX: 100,
              translateY: 0,
              itemsSpacing: 0,
              itemDirection: 'left-to-right',
              itemWidth: 80,
              itemHeight: 20,
              itemOpacity: 0.75,
              symbolSize: 12,
              symbolShape: 'circle',
              symbolBorderColor: 'rgba(0, 0, 0, .5)',
              effects: [
                {
                  on: 'hover',
                  style: {
                    itemBackground: 'rgba(0, 0, 0, .03)',
                    itemOpacity: 1
                  }
                }
              ]
            }
          ]}
          isInteractive={true}
          useMesh={true}
        />
        </div>
      </div>
      <div className="d-flex flex-wrap justify-content-center">
        <div className={styles.chartContainer}>
        <ResponsiveLine
          data={fishCountPerYear}
          margin={{ top: 55, right: 165, bottom: 55, left: 25 }}
          curve="monotoneX"
          colors={{ scheme: 'paired' }}
          axisBottom={{
            orient: 'bottom',
            // tickSize: 5,
            // tickPadding: 5,
            // tickRotation: 0,
            legend: 'Number Of Fish Per Year By Species',
            legendOffset: 36,
            legendPosition: 'middle'
          }}
          legends={[
            {
              anchor: 'bottom-right',
              direction: 'column',
              justify: false,
              translateX: 100,
              translateY: 0,
              itemsSpacing: 0,
              itemDirection: 'left-to-right',
              itemWidth: 80,
              itemHeight: 20,
              itemOpacity: 0.75,
              symbolSize: 12,
              symbolShape: 'circle',
              symbolBorderColor: 'rgba(0, 0, 0, .5)',
              effects: [
                {
                  on: 'hover',
                  style: {
                    itemBackground: 'rgba(0, 0, 0, .03)',
                    itemOpacity: 1
                  }
                }
              ]
            }
          ]}
          isInteractive={true}
          useMesh={true}
        />
        </div>
      </div>
    </Container>
  );
}

export default Stats;