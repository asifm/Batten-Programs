<script>
  import * as Highcharts from 'highcharts/highcharts-gantt';
  import { roadmapOptions } from './roadmapOptions';
  import { dataPromise } from '../../parseData';
  import { getProgramDate } from '../../helpers';
  // let description: String = 'Click on a program name to learn more.';
  let program = {
    name: '',
    description: '',
  };
  let dataready = false;
  let backgroundClass = 'bg-gray-200';

  dataPromise.then(resolvedData => {
    // Inject data into series.data array's first (likely only) element
    roadmapOptions.series[0]['data'] = resolvedData;
    roadmapOptions.plotOptions.series['point'] = {
      events: {
        click: function () {
          program = this.options;
          dataready = true;
          backgroundClass = `bg-${this.options.theme.toLowerCase()}`;
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
  .highcharts-yaxis {
    display: none;
  }
</style>

<div class="flex flex-wrap parent-container">
  <!-- Content goes here -->
  <div>
    <div id="roadmap-container" />
  </div>
  <div class="">
    {#if dataready}
      <div id="description" class="m-3 rounded-md shadow {backgroundClass}">
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
            class="inline-block my-2 text-sm uppercase border-b-2 border-dd-lightblue">
            <strong>{getProgramDate(program.start)}</strong>
            to
            <strong>{getProgramDate(program.end)}</strong>
          </p>
          <p class="text-base">{program.description}</p>

        </div>
      </div>
    {:else}
      <div class="p-2 m-2 bg-gray-200 rounded-md">
        <h4>Click on a program title to learn more.</h4>
      </div>
    {/if}
  </div>
</div>
