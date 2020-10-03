import React from 'react';
import styles from './Stats.module.css';
import { Container } from 'react-bootstrap';
import { ResponsiveLine } from '@nivo/line'

function Stats({fish}) {
  // Just use Oz to make things easier for now
  const averageFishWeightPerYear = [
    {
      'id': 'Lake Trout',
      'data': [
        {
          'x': 1995,
          'y': 3.5
        },
        {
          'x': 1996,
          'y': 4.2
        },
        {
          'x': 1997,
          'y': 3.1
        }
      ]
    },
    {
      'id': 'Rainbow Trout',
      'data': [
        {
          'x': 1995,
          'y': 1.1
        },
        {
          'x': 1996,
          'y': 0.7
        },
        {
          'x': 1997,
          'y': 2.1
        }
      ]
    },
    {
      'id': 'Salmon',
      'data': [
        {
          'x': 1995,
          'y': 3.8
        },
        {
          'x': 1996,
          'y': 2.9
        },
        {
          'x': 1997,
          'y': 3.5
        }
      ]
    },
    {
      'id': 'SmallMouth',
      'data': [
        {
          'x': 1995,
          'y': 2.0
        },
        {
          'x': 1996,
          'y': 1.8
        },
        {
          'x': 1997,
          'y': 3.1
        }
      ]
    }
  ]

  return (
    <Container fluid>
      <div className="d-flex flex-wrap justify-content-center">
        <div className={styles.chartContainer}>
        <ResponsiveLine
          data={averageFishWeightPerYear}
          margin={{ top: 55, right: 165, bottom: 55, left: 25 }}
          curve="natural"
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
    </Container>
  );
}

export default Stats;