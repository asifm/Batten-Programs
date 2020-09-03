<script>
  // todo: add svelte animation/transition when dom elements appear/disappear
  import { fade, fly } from 'svelte/transition';

  import Tailwindcss from './Tailwindcss.svelte';
  // import Roadmap from './Components/Roadmap/Roadmap.svelte';
  import ProgramTile from './Components/ProgramTile/ProgramTile.svelte';
  import ProgramMonthTile from './Components/ProgramMonthTile/ProgramMonthTile.svelte';
  import { dataPromise } from './data/parseAirtableData';

  let programs = [];
  $: selectedPrograms = programs;

  let programTypes = ['All Types'];
  let programMonths = [];
  let dataready = false;
  let hiddenDropdown = true;
  let alumniToggle = false;

  function handleDropdownButtonClick() {
    hiddenDropdown = !hiddenDropdown;
  }

  function handleDropdownOptionClick(e) {
    let optSelected = e.target.innerText;
    hiddenDropdown = true;
    if (optSelected === 'All Types') {
      selectedPrograms = programs;
    } else {
      selectedPrograms = programs.filter(el => el.programType == optSelected);
    }
  }
  function handleAlumniToggle() {
    alumniToggle = !alumniToggle;
    if (alumniToggle) {
      selectedPrograms = programs.filter(el => el.alumni);
    } else {
      selectedPrograms = programs;
    }
  }

  function handleTileClick(e, programData) {
    console.log(e, programData);
  }

  dataPromise.then(resolvedData => {
    // Using the technique found here https://stackoverflow.com/a/39333479/1927583
    programs = resolvedData[0].map(el =>
      (({
        alumni,
        audience,
        description,
        end,
        completed,
        link,
        months,
        name,
        programType,
        quickDescription,
        start,
        theme,
      }) => ({
        alumni,
        audience,
        description,
        end,
        completed,
        link,
        link,
        months,
        name,
        programType,
        quickDescription,
        start,
        theme,
      }))(el),
    );
    programTypes = programTypes.concat(resolvedData[1]);
    programMonths = resolvedData[2];
    dataready = true;
  });
</script>

<Tailwindcss />
<main>
  <!-- header -->
  <div class="mb-3 leading-tight text-center shadow bg-tangerine text-dd-blue">
    <div class="container px-4 py-1 mx-auto">
      <h2>Batten Institute Programs</h2>
      <h3 class="">Fall 2020–21</h3>
    </div>
  </div>

  <!-- New section: ProgramMonthTiles -->

  <div class="container px-3 mx-auto">
    {#if dataready}
      <div class="grid grid-cols-2 gap-3 mb-10">
        <!-- Dropdown button -->
        <div class="relative col-span-1 text-left">
          <div>
            <span class="rounded-md shadow-sm">
              <button
                type="button"
                on:click={handleDropdownButtonClick}
                class="inline-flex px-4 py-2 font-medium leading-5 text-gray-700 transition duration-150 ease-in-out bg-white border border-gray-300 rounded-md hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800"
                id="options-menu"
                aria-haspopup="true"
                aria-expanded="true">
                Program Type <svg
                  class="w-5 h-5 ml-2 -mr-1"
                  viewBox="0 0 20 20"
                  fill="currentColor">
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd" />
                </svg>
              </button>
            </span>
          </div>
          <!-- Dropdown options -->
          <div
            class="absolute right-0 w-56 mt-2 origin-top-right rounded-md shadow-lg">
            <div class="bg-white rounded-md">
              <div
                class="py-1 cursor-pointer"
                role="menu"
                hidden={hiddenDropdown}
                on:click={handleDropdownOptionClick}
                aria-orientation="vertical"
                aria-labelledby="options-menu">
                {#each programTypes as programType}
                  <span
                    class="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
                    role="menuitem">{programType}</span>
                {/each}
              </div>
            </div>
          </div>
        </div>

        <!-- Toggle -->

        <div class="col-span-1 text-right">
          <span class="p-1 text-sm text-gray-700 rounded">Open to alumni</span>
          <span
            role="checkbox"
            tabindex="0"
            aria-checked="false"
            on:click={handleAlumniToggle}
            class="align-middle relative inline-flex flex-shrink-0 h-6
              transition-colors duration-200 ease-in-out {alumniToggle ? 'bg-dd-blue-600' : 'bg-gray-200'}
              border-2 border-transparent rounded-full cursor-pointer w-16 focus:outline-none
              focus:shadow-outline">
            <span
              aria-hidden="true"
              class="inline-block w-6 h-6 transition duration-200 ease-in-out
                transform {alumniToggle ? 'translate-x-10' : 'translate-x-0'} bg-white
                rounded-full shadow" />
          </span>
        </div>
      </div>

      <div class="grid grid-cols-1 sm:gap-5 sm:grid-cols-2 lg:grid-cols-5">
        {#each programMonths as month}
          <div class="col-span-1">
            <div
              class="p-3 font-bold tracking-widest uppercase bg-gray-100 rounded-md text-dd-blue">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                class="inline w-6 h-6"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {month}
            </div>
            {#each selectedPrograms as programData}
              <li
                class="flex flex-col rounded-md"
                on:click={event => handleTileClick(event, programData)}
                in:fly|local={{ y: 100, duration: 750 }}
                out:fade|local>
                {#if programData.months.includes(month)}
                  <ProgramMonthTile {...programData} />
                {/if}
              </li>
            {/each}
          </div>
        {/each}
      </div>
    {/if}
  </div>

  <!-- New section: ProgramTiles -->
  <div class="container mx-auto">
    <!-- <ProgramTile {...programData} /> -->
  </div>
</main>
