<script>
  // todo: find appropriate icons for the program types
  export let name;
  export let quickDescription;
  export let programTypeColor;
  export let programType;

  // export let description;
  // export let link;
  // export let theme;
  // export let audience;
  // export let start;
  // export let end;
  // export let contactnames;
  // export let contactemails
  // export let months;
  // export let completed;
  // export let alumni;
</script>

<style>
  .program-tile:hover {
    /* A tile when scaled up on hover needs to be over the adjacent tiles */
    z-index: 20;
  }
</style>

<div
  class="flex mb-2 transition duration-500 ease-in-out transform program-tile hover:scale-110 hover:translate-x-3"
  on:click>
  <div
    class="flex justify-center flex-shrink-0 w-8 pt-4 leading-5 opacity-50 rounded-l-md"
    style="background-color: {programTypeColor}">
    <!-- {#if programType}{programType[0]}{/if} -->
    <!-- Add icon -->
  </div>
  <div
    class="flex justify-between flex-1 p-1 text-black cursor-pointer rounded-r-md"
    style="background-color: {programTypeColor}">
    <!-- add something later to indicate completed or not. e.g. {completed ? 'opacity-75' : 'opacity-100'} -->
    <div class="flex-1 px-4 py-2 leading-5">
      <h6 class="pb-1">{name}</h6>

      <p class="pb-2 text-base">{quickDescription}</p>
      <span class="text-xs tracking-wider uppercase text-cool-gray-800">
        {programType}
      </span>
    </div>
  </div>
</div>
