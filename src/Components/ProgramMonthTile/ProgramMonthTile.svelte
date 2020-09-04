<script>
  import { fade, fly, slide } from 'svelte/transition';
  import { onMount } from 'svelte';
  import ProgramModal from '../ProgramModal/ProgramModal.svelte';
  // todo: find appropriate icons for the program types
  export let name;
  export let description;
  export let link;
  export let theme;
  export let audience;
  export let start;
  export let end;

  export let quickDescription;
  // export let contactnames;
  // export let contactemails
  // export let months;
  export let completed;
  // export let alumni;
  export let programType;
  let modalHidden = true;

  function handleClick(e) {
    modalHidden = !modalHidden;
  }
</script>

<style>
  #program-modal {
    top: 50%;
    left: 50%;
  }
</style>

<div class="flex mb-2" on:click={handleClick}>
  <div
    class="flex pt-4 justify-center flex-shrink-0 w-8 font-light text-lg
      text-white leading-5 rounded-l-md bg-{theme}">
    {#if programType}{programType[0]}{/if}
  </div>
  <div
    class="flex justify-between flex-1 text-white transition ease-in-out p-1
      cursor-pointer duration-750 hover:text-gray-900 hover:bg-white {completed ? 'bg-dd-blue-400' : 'bg-dd-blue'}">
    <div class="flex-1 px-4 py-2 leading-5">
      <h6 class="pb-1">{name}</h6>

      <p class="pb-1 text-sm">{quickDescription}</p>
      <span class="text-xs tracking-wider text-gray-500 uppercase">
        {programType}
      </span>
    </div>
  </div>
  {#if !modalHidden}
    <div
      id="program-modal"
      transition:slide
      class="fixed z-10 w-full transform -translate-x-1/2 -translate-y-1/2 border-4 shadow-lg md:w-1/2 lg:w-1/3 border-dd-blue">
      <ProgramModal
        {name}
        {description}
        {start}
        {end}
        {theme}
        {audience}
        {link} />
    </div>
  {/if}
</div>
