export let roadmapOptions = {
  chart: {
    // styledMode: true,
    minWidth: 900,
  },
  plotOptions: {
    series: {
      cursor: 'pointer',
    },
  },
  series: [
    {
      pointWidth: 25,
    },
  ],
  credits: {
    enabled: false,
  },
  yAxis: {
    grid: {
      enabled: true,
      borderColor: '#ffffff',
    },
    labels: {
      enabled: true,
      style: {
        width: '200px',
        // fontSize: '10px',
        // textOverflow: 'hidden',
      },
    },
    uniqueNames: true,
  },
  xAxis: [
    {
      labels: {
        format: 'W {value:%W}',
        style: {
          'font-size': '9px',
          color: 'gray',
        },
      },
      grid: {
        enabled: true,
        cellHeight: 20,
        tickInterval: 1000 * 60 * 60 * 24 * 7,
      },
    },
    {
      grid: {
        enabled: true,
        cellHeight: 40,
        min: Date.UTC(2020, 7, 1),
        softMax: Date.UTC(2020, 11, 31),
        borderColor: 'rgba(255, 230, 25, 0.7)',
        tickInterval: 1000 * 60 * 60 * 24 * 7 * 30,
      },
      labels: {
        format: '{value:%B}',
        style: {
          color: 'black',
        },
      },
      currentDateIndicator: {
        width: 1,
        dashStyle: 'dot',
        color: 'red',
        label: {
          format: '%B %d, %Y',
        },
      },
      // alternateGridColor: '#efefef',
      endOnTick: true,
      minRange: 6.048e8, // 1 week
      maxRange: 1.051e10, // 4 months
    },
  ],
  navigator: {
    enabled: true,
    liveRedraw: true,
    labels: {
      enabled: false,
    },
  },
  scrollbar: {
    enabled: true,
  },
  tooltip: {
    enabled: false,
    // useHTML: true,
    // headerFormat: '<small>{point.key} <b>{point.mode}</b></small>',
    // pointFormat: '<p>For <b>{point.audience} </p>',
    // style: {
    //   opacity: 1,
    //   zIndex: 100,
    // },
  },

  rangeSelector: {
    enabled: true,
    floating: false,
    selected: 10,
    position: 'bottom',
    inputEnabled: false,
    buttons: [
      {
        type: 'week',
        count: 1,
        text: 'W',
      },
      {
        type: 'month',
        count: 1,
        text: 'M',
      },
      {
        type: 'month',
        count: 4,
        text: 'T',
      },
      {
        type: 'all',
        text: 'All',
      },
    ],
  },
};
