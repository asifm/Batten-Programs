<script>
  // todo: add svelte animation/transition when dom elements appear/disappear
  import { fade, fly } from 'svelte/transition';

  import Tailwindcss from './Tailwindcss.svelte';
  import Roadmap from './Components/Roadmap/Roadmap.svelte';
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
    console.log(optSelected);
    hiddenDropdown = true;
    if (optSelected === 'All Types') {
      selectedPrograms = programs;
    } else {
      selectedPrograms = programs.filter(el => el.programType == optSelected);
    }
  }
  function handleToggleClick() {
    alumniToggle = !alumniToggle;
    console.log(alumniToggle);
    if (alumniToggle) {
      selectedPrograms = programs.filter(el => el.alumni);
    } else {
      selectedPrograms = programs;
    }
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
  <div class="container mx-auto">
    <h2 class="title">
      <span class="px-3 rounded shadow-sm bg-learn">Learn</span>
      <span class="px-3 rounded shadow-sm bg-experience">Experience</span>
      <span class="px-3 rounded shadow-sm bg-connect">Connect</span>
    </h2>
  </div>

  <!-- New section: ProgramMonthTiles -->
  <!-- todo: add dropdown for program types -->
  <!-- todo: add toggle for "open to alumni" -->
  <div class="container px-3 mx-auto">
    <p class="my-10 text-gray-700 border-t">[View: Small Cards by Month]</p>

    {#if dataready}
      <div class="grid grid-cols-2 mb-10 lg:grid-cols-6">
        <!-- Dropdown button -->
        <div class="relative col-span-1 col-start-1 text-left" id="selecttype">
          <div>
            <span class="rounded-md shadow-sm">
              <button
                type="button"
                on:click={handleDropdownButtonClick}
                class="inline-flex justify-center px-4 py-2 text-sm font-medium leading-5 text-gray-700 transition duration-150 ease-in-out bg-white border border-gray-300 rounded-md hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800"
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
                class="py-1"
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
        <!-- todo: make toggle work -->
        <div class="col-span-1 col-start-6">
          <span class="space-x-2">Programs open to alumni</span>
          <span
            role="checkbox"
            tabindex="0"
            aria-checked={alumniToggle}
            on:click={handleToggleClick}
            class="relative inline-flex items-center justify-center flex-shrink-0 w-10 h-5 space-x-2 cursor-pointer group focus:outline-none">
            <!-- On: "bg-indigo-600", Off: "bg-gray-200" -->
            <!-- bg not working -->
            <span
              aria-hidden="true"
              class="{alumniToggle ? 'bg-dd-blue' : ' bg-gray-300'} absolute h-4
                mx-auto transition-colors duration-200 ease-in-out rounded-full inline-block
                w-9" />
            <!-- On: "translate-x-5", Off: "translate-x-0" -->
            <span
              aria-hidden="true"
              class="{alumniToggle ? 'translate-x-5 ' : 'translate-x-0 '} absolute
                left-0 inline-block w-5 h-5 transition-transform duration-200 ease-in-out
                transform translate-x-0 bg-white border border-gray-200 rounded-full
                shadow group-focus:shadow-outline group-focus:border-blue-300" />
          </span>
        </div>
      </div>

      <div class="grid grid-cols-1 sm:gap-5 sm:grid-cols-2 lg:grid-cols-5">
        {#each programMonths as month}
          <div class="col-span-1">
            <div class="p-3 font-bold tracking-widest rounded-md text-dd-blue">
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
  <!-- New section: Roadmap -->
  <div class="container mx-auto">
    <p class="my-10 text-gray-700 border-t">[View: Gantt-Like]</p>
    <Roadmap />
  </div>

  <!-- New section: ProgramTiles -->
  <div class="container mx-auto">
    <p class="my-10 text-gray-700 border-t">[View: Cards]</p>
    <ul class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {#if dataready}
        {#each programs as program}
          <li class="col-span-1 bg-white rounded-lg shadow">
            <ProgramTile {...program} />
          </li>
        {/each}
      {/if}
    </ul>
  </div>
</main>
