<script>
  // import { onMount } from 'svelte';
  // import { each } from 'svelte/internal';
  import Tailwindcss from './Tailwindcss.svelte';
  import Roadmap from './Components/Roadmap/Roadmap.svelte';
  import ProgramTile from './Components/ProgramTile/ProgramTile.svelte';
  import { dataPromise } from './parseData';

  let programs = [];
  let dataready = false;

  dataPromise.then(resolvedData => {
    programs = resolvedData;
    dataready = true;
  });
</script>

<Tailwindcss />
<main>
  <div class="container mx-auto rounded-lg">
    <div class="p-2 ml-10">
      <h2 class="title">
        <span class="px-3 rounded-md shadow-md bg-learn">Learn</span>
        <span class="px-3 rounded-md shadow-md bg-experience">Experience</span>
        <span class="px-3 rounded-md shadow-md bg-connect">Connect</span>
      </h2>
    </div>
    <Roadmap />
  </div>
  <!-- New section -->
  <div class="bg-gray-200">
    <div class="container p-10 mx-auto ">
      <ul class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {#if dataready}
          {#each programs as program}
            <ProgramTile {...program} />
          {/each}
        {/if}
      </ul>
    </div>
  </div>
</main>
