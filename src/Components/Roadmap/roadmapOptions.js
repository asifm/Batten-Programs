export let roadmapOptions = {
  chart: {
    styledMode: false,
    width: 900,
  },
  plotOptions: {
    series: {
      cursor: 'pointer',
    },
  },
  series: [
    {
      pointWidth: 25,
      dataLabels: [
        {
          style: {
            color: '#000000',
            fontFamily: 'Georgia',
            fontSize: '12px',
            fontWeight: 'normal',
          },
          enabled: true,
          format: '<p>{point.name}</p>',
          useHTML: true,
          align: 'left',
        },
      ],
    },
  ],
  credits: {
    enabled: false,
  },
  yAxis: {
    staticScale: 25,
    // alternateGridColor: 'rgba(254, 254, 254, 0.9)',
    grid: {
      enabled: true,
      borderColor: '#ffffff',
    },
    labels: {
      enabled: false,
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
        // min: Date.UTC(2020, 7, 1),
        // softMax: Date.UTC(2020, 11, 31),
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
    // pointFormat: '<p>For <b>{point.for} </p>',
    // style: {
    //   opacity: 1,
    //   zIndex: 100,
    // },
  },

  rangeSelector: {
    enabled: false,
    //   floating: false,
    //   selected: 10,
    //   position: 'bottom',
    //   inputEnabled: false,
    //   buttons: [
    //     {
    //       type: 'week',
    //       count: 1,
    //       text: 'W',
    //     },
    //     {
    //       type: 'month',
    //       count: 1,
    //       text: 'M',
    //     },
    //     {
    //       type: 'month',
    //       count: 4,
    //       text: 'T',
    //     },
    //     {
    //       type: 'all',
    //       text: 'All',
    //     },
    //   ],
  },
};
