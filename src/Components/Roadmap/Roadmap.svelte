<script>
  import * as Highcharts from 'highcharts/highcharts-gantt';
  import { roadmapOptions } from './roadmapOptions';
  import { dataPromise } from '../../data/parseAirtableData';
  import { getFormattedDateFromEpoch } from '../../helpers';

  let program;
  let dataready = false;

  dataPromise.then(resolvedData => {
    // Inject data into series.data array's first (likely only) element
    roadmapOptions.series[0]['data'] = resolvedData[0];
    roadmapOptions.plotOptions.series['point'] = {
      events: {
        click: function () {
          program = this.options;
          dataready = true;
        },
      },
    };
    Highcharts.ganttChart('roadmap-container', roadmapOptions);
  });
</script>

<style>
  #roadmap-container {
    min-width: 900px;
  }
  #description {
    width: 300px;
  }
  /* .highcharts-yaxis {
    display: none;
  } */
</style>

<div class="grid grid-cols-4 lg:grid-cols-5">
  <div class="col-span-4">
    <div id="roadmap-container" />
  </div>
  <div class="self-center col-span-1">
    {#if dataready}
      <div id="description" class="m-3 rounded-md shadow bg-{program.theme}">
        <div class="p-5 uppercase bg-gray-200 border-b border-white">
          <h4 class="ml-2">{program.name}</h4>
          <button type="button" class="bg-white shadow btn">
            <a href={program.link} target="_blank" class="href">
              See program page for details
            </a>
          </button>
        </div>
        <div class="p-5">
          <p
            class="inline-block my-2 text-sm uppercase border-b-2 border-dd-blue">
            <strong>{getFormattedDateFromEpoch(program.start)}</strong> to <strong>{getFormattedDateFromEpoch(program.end)}</strong>
          </p>
          <p class="text-base">{program.description}</p>
        </div>
      </div>
    {:else}
      <div class="p-2 m-3 bg-gray-200 rounded-md">
        <h6>To learn more, click on the bars on the chart.</h6>
      </div>
    {/if}
  </div>
</div>
