<script>
  // todo: find and add appropriate icons for the program types
  export let name;
  export let quickDescription;
  export let programTypeColor;
  export let programType;
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
    class="flex justify-center flex-shrink-0 w-6 pt-4 leading-5 opacity-50 rounded-l-md"
    style="background-color: {programTypeColor}">
    <!-- {#if programType}{programType[0]}{/if} -->
    <!-- Add icon -->
  </div>
  <div
    class="flex justify-between flex-1 p-1 text-black cursor-pointer rounded-r-md"
    style="background-color: {programTypeColor}">
    <!-- add something later to indicate completed or not. e.g. {completed ? 'opacity-75' : 'opacity-100'} -->
    <div class="flex-1 px-4 py-2 leading-5">
      <p class="pb-1 text-lg font-medium">{name}</p>
      <p class="pb-2 text-base">{quickDescription}</p>
      <div class="text-xs inline-block px-1.5 py-0.5 bg-white rounded shadow-sm">
        <span class="tracking-wider text-gray-600 uppercase">
          {programType}
        </span>
      </div>
    </div>
  </div>
</div>
