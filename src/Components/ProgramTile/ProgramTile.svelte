<script>
  import { fade, fly, slide } from 'svelte/transition';
  import { onMount } from 'svelte';
  import ProgramModal from '../ProgramModal/ProgramModal.svelte';
  // todo: find appropriate icons for the program types
  export let name;
  // export let description;
  // export let link;
  // export let theme;
  export let programTypeColor;
  // export let audience;
  // export let start;
  // export let end;

  export let quickDescription;
  // export let contactnames;
  // export let contactemails
  // export let months;
  export let completed;
  // export let alumni;
  export let programType;
</script>

<div class="flex mb-2 program-tile" on:click>
  <div
    class="flex pt-4 justify-center flex-shrink-0 w-8 font-light text-lg
      text-white leading-5 rounded-l-md"
    style="background-color: {programTypeColor}">
    <!-- {#if programType}{programType[0]}{/if} -->
  </div>
  <div
    class="flex justify-between flex-1 text-white transition ease-in-out p-1
      cursor-pointer duration-750 hover:text-cool-gray-900 hover:bg-white {completed ? 'bg-dd-blue-400' : 'bg-dd-blue'}">
    <div class="flex-1 px-4 py-2 leading-5">
      <h6 class="pb-1">{name}</h6>

      <p class="pb-1 text-sm">{quickDescription}</p>
      <span class="text-xs tracking-wider text-cool-gray-200 uppercase">
        {programType}
      </span>
    </div>
  </div>
</div>
