<script>
  // If I need to parse multiple params https://css-tricks.com/snippets/javascript/get-url-variables/
  import { dataPromise } from '../data/parseAirtableData';
  import { getFormattedDateFromEpoch } from '../helpers';

  // Append ?n to url to show n programs
  let param = location.search;
  let numProgramsToShow = param == '' ? 4 : +param.slice(1, param.length);
  let selectedPrograms = [];
  // todo: move async operation to html
  dataPromise.then(resolvedData => {
    selectedPrograms = resolvedData[0]
      .filter(el => !el.completed)
      .slice(0, numProgramsToShow);
  });
</script>

<div class="p-5">
  <h3 class="text-2xl text-dd-orange">Upcoming Programs and Events</h3>
  {#each selectedPrograms as program, i}
    <a href={program.link} target="_blank">
      <div
        class="pb-2 mb-2 duration-500 transform border-b rounded shadow-sm cursor-pointer group hover:shadow-lg hover:bg-dd-blue-alt">
        <div
          class="p-2 font-bold tracking-widest uppercase rounded"
          style="background-color:{program.programTypeColor}">
          {program.name}
        </div>

        <div class="px-3 mt-1">
          <span
            class="border border-dd-blue-200 bg-yellow-100 px-1.5 py-0.5
              tracking-widest text-xs text-black uppercase rounded-bl-md">{getFormattedDateFromEpoch(program.start)}
            –
            {getFormattedDateFromEpoch(program.end)}</span>

          <span
            class="border border-dd-orange px-1.5 py-0.5 tracking-widest text-xs
              text-dd-blue uppercase bg-dd-orange-100 rounded-br-md">{program.programType}</span>
          <svg
            class="inline-block w-5 h-5 ml-3 text-dd-blue-300"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"><path
              d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
            <path
              d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" /></svg>
        </div>
        <div class="px-3 duration-500 group-hover:text-white">
          <p>{program.quickDescription}</p>
        </div>
      </div>
    </a>
  {/each}
</div>
