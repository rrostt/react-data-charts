# react-data-charts

A collection of some drop in charts for visualising data, using d3js.

## Install

```sh
$ npm install react-data-charts
```

## DataXYChart

Plot multiple series of x/y-data.

Legend can be repositioned by dragging.

```
import React from 'react';
import { DataXYChart } from 'react-data-charts';

export default class SimpleGraph extends React.Component {
  render() {
    var data = [
      {
        name: 'Series A',
        values: [
          { x: 0, y: 0 },
          { x: 5, y: 100 },
          { x: 10, y: 50 },
        ],
      },
      {
        name: 'Series B',
        values: [
          { x: 0, y: 100 },
          { x: 6, y: 0 },
          { x: 8, y: 10 },
          { x: 18, y: 30 },
        ],
      },
    ];

    return <div>
      <DataXYChart
        title='An example chart'
        data={data}
        width='400'
        height='400'
        />
    </div>;
  }
}
```
