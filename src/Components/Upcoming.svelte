<script>
  import { dataPromise } from '../data/parseAirtableData';
  import { getFormattedDate } from '../helpers';

  let selectedPrograms = [];
  // todo: move async operation to html
  dataPromise.then(resolvedData => {
    selectedPrograms = resolvedData[0].filter(el => el.showUnder.includes('Batten Featured'));
  });
</script>

<div class="p-4">
  <h2 class="text-3xl text-dd-orange">Upcoming Programs and Events</h2>
  {#each selectedPrograms as program, i}
    <a href={program.link} target="_blank">
      <div
        class="mb-2 duration-200 border rounded shadow-sm cursor-pointer group hover:shadow-lg hover:border-dd-blue-300"
        style="background-color:{program.programTypeColor}">
        <div class="px-3 pt-2">
          <span class="font-bold tracking-widest uppercase rounded">
            {program.name}
          </span><svg
            class="inline-block w-5 h-5 text-dd-blue-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"><path
              d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
            <path
              d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" /></svg>
        </div>

        <div class="p-3">
          <div class="flex">
            <span
              class="border border-dd-blue-300 bg-yellow-100 px-1.5 py-0.5
                tracking-widest text-xs text-black uppercase rounded-bl-md">
              {#if program.startDate.getTime() == program.endDate.getTime()}
                {getFormattedDate(program.startDate)}
              {:else}
                {getFormattedDate(program.startDate)}
                –
                {getFormattedDate(program.endDate)}
              {/if}
            </span>

            <span
              class="border border-dd-orange px-1.5 py-0.5 tracking-widest text-xs
                text-dd-blue uppercase bg-dd-orange-100 rounded-br-md">{program.programType}</span>
          </div>
          <div>
            <p>{program.quickDescription}</p>
          </div>
        </div>
      </div>
    </a>
  {/each}
</div>
